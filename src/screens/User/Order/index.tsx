import React from "react";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { useFocusEffect } from '@react-navigation/native'

import database from '@react-native-firebase/database'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useAuth } from "../../../hooks/auth";
import { COLLECTION_ORDERS } from "../../../configs/database";
import { FinishOrder } from "../FinishOrder";
import { MyItems } from "../MyItems";
import { AcaiMenu } from "../../../components/AcaiMenu";
import { OrderProps, PaymentProps } from "../../../hooks/order";


export function Order() {

    const { user, address } = useAuth()

    const [orders, setOrders] = useState<OrderProps[]>([] as OrderProps[])
    const [loading, setLoading] = useState(true)
    const [totalValue, setTotalValue] = useState(0)
    const [showFinishOrder, setShowFinishOrder] = useState(false)
    const [showMyItems, setShowMyItems] = useState(false)

    async function sendOrder(paymentOptions: PaymentProps) {
        setShowFinishOrder(false)
        const orderRef = database().ref(`/orders`)

        const userOrder = orderRef.push({
            name: user.name,
            userId: user.id,
            address: address,
            order: orders,
            status: 'Aguardando...',
            totalValue: totalValue,
            payment: paymentOptions,
        })

        AsyncStorage.removeItem(COLLECTION_ORDERS)

        Alert.alert("Pedido enviado", "Pedido enviado com sucesso!")

    }

    async function loadOrders() {
        const response = await AsyncStorage.getItem(COLLECTION_ORDERS)
        const storage: OrderProps[] = response ? JSON.parse(response) : []
        setOrders(storage)
        setLoading(false)
    }
    function getTotalValue() {
        let calcValue = 0
        orders.forEach(order => {
            calcValue += parseInt(order.value)
        })
        return setTotalValue(calcValue)
    }

    useFocusEffect(() => {
        loadOrders()
        getTotalValue()
    })

    

    return (
        <View style={styles.container}>
            <FinishOrder
                onCancel={() => setShowFinishOrder(false)}
                isVisible={showFinishOrder}
                value={totalValue}
                onSave={sendOrder}
            />
            <MyItems
                onCancel={() => setShowMyItems(false)}
                isVisible={showMyItems}
                orders={orders}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Cardápio</Text>
            </View>
            <View style={styles.body}>
                <AcaiMenu />
                <View style={styles.order}>
                    <RectButton
                        onPress={() => setShowMyItems(true)}
                    >
                        <View style={styles.myItemsButton}>
                            <Text style={styles.myItemsText}>
                                Meu pedido
                            </Text>
                        </View>
                    </RectButton>
                </View>
                <Text style={styles.totalValue}>{`Valor total: R$ ${totalValue}`}</Text>
                <View style={styles.orderButtonArea}>
                    <TouchableOpacity onPress={() => setShowFinishOrder(true)}>
                        <View style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>
                                Enviar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


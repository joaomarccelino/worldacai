import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { Text, View } from "react-native";

import database from '@react-native-firebase/database'
import { FlatList } from "react-native-gesture-handler";
import { AdminOrder } from "../../../components/AdminOrder";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { FirebaseOrders, OrderType } from "../../../hooks/order";


export function AdminOrders() {

    const navigation = useNavigation()

    const [orders, setOrders] = useState<OrderType[]>()
    useFocusEffect(() => {
        const userRef = database().ref(`/orders`)
        userRef
            .on('value', snapshot => {
                const data: FirebaseOrders = snapshot.val()
                const parsedData = Object.entries(data).map(([key, value]) => {
                    return {
                        id: key,
                        name: value.name,
                        userId: value.userId,
                        address: value.address,
                        order: value.order,
                        status: value.status,
                        totalValue: value.totalValue,
                        payment: value.payment
                    }
                })
                setOrders(parsedData)

            });
        return () => {
            userRef.off('value')
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pedidos</Text>
            <View style={styles.body}>
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <AdminOrder
                            id={item.id}
                            name={item.name}
                            address={item.address}
                            order={item.order}
                            status={item.status}
                            payment={item.payment}
                            totalValue={item.totalValue}
                            onPress={() => navigation.navigate("OrderDetails", {
                                id: item.id,
                                name: item.name,
                                address: item.address,
                                order: item.order,
                                status: item.status,
                                payment: item.payment
                            })}
                        />
                    }

                />
            </View>
        </View>
    )
}
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { Text, View } from "react-native";

import database from '@react-native-firebase/database'
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { UserOrder } from "../../../components/UserOrder";
import { styles } from "./styles";
import { useAuth } from "../../../hooks/auth";
import { FirebaseOrders, OrderType } from "../../../hooks/order";

export function MyOrders() {

    const {user} = useAuth()

    const navigation = useNavigation()

    const [orders, setOrders] = useState<OrderType[]>()
    useFocusEffect(() => {
        const userRef = database().ref(`/orders`).orderByChild('userId').equalTo(user.id)
        userRef
            .on('value', snapshot => {
                const data: FirebaseOrders = snapshot.val() || {}
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
            <View style={styles.header}>
                <Text style={styles.title}>Meus pedidos</Text>
            </View>
            <View style={styles.content}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <UserOrder
                        id={item.id}
                        name={item.name}
                        address={item.address}
                        order={item.order}
                        status={item.status}
                        totalValue={item.totalValue}
                        payment={item.payment}
                        onPress={() => navigation.navigate("UserOrderDetails", {
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
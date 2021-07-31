import React, { useEffect, useState } from "react";
import { View } from "react-native";
import database from '@react-native-firebase/database'
import { useNavigation } from "@react-navigation/native";

import { ChangeAddress } from "../../../components/ChangeAddress";
import { AdminButton } from "../../../components/AdminButton";
import { Header } from "../../../components/Header";

import { styles } from "./styles";
import { useAuth } from "../../../hooks/auth";

export function AdminHome() {
    const [showChangeAddress, setShowChangeAddress] = useState(false)

    const navigation = useNavigation()

    const { user } = useAuth()


    async function registerAddress(neigh: string, str: string, num: string) {
        const userRef = database().ref(`/users/${user.id}/address`)

        const userAddress = userRef.set({
            neighborhood: neigh,
            street: str,
            number: num
        })

        setShowChangeAddress(false)

    }

    return (
        <View style={styles.main}>
            <ChangeAddress
                isVisible={showChangeAddress}
                onCancel={() => setShowChangeAddress(false)}
                onSave={registerAddress}
            />
            <Header handleAddress={() => setShowChangeAddress(true)} />

            <View style={styles.body}>
                <AdminButton title="pedidos" onPress={() => navigation.navigate("AdminOrders")} />
            </View>
        </View>
    )
}


import React, { useState } from "react";
import { View } from "react-native";
import database from '@react-native-firebase/database'
import { useNavigation } from "@react-navigation/native";

import { ChangeAddress } from "../../../components/ChangeAddress";
import { Header } from "../../../components/Header";

import { styles } from "./styles";
import { useAuth } from "../../../hooks/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_ADDRESS } from "../../../configs/database";

export function Home() {
    const [showChangeAddress, setShowChangeAddress] = useState(false)

    const { user } = useAuth()

    async function registerAddress(neigh: string, str: string, num: string) {
        const userRef = database().ref(`/users/${user.id}/address`)

        const userAddress = userRef.set({
            neighborhood: neigh,
            street: str,
            number: num
        })

        await AsyncStorage.setItem(COLLECTION_ADDRESS, neigh + ', ' + str + ', ' + num)

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

            </View>
        </View>
    )
}


import React, { useState } from "react";
import { View } from "react-native";
import database from '@react-native-firebase/database'
import { useNavigation } from "@react-navigation/native";

import { ChangeAddress } from "../../../components/ChangeAddress";
import { Header } from "../../../components/Header";

import { styles } from "./styles";
import { useAuth } from "../../../hooks/auth";

export function Home() {
    const [showChangeAddress, setShowChangeAddress] = useState(false)

    const navigation = useNavigation()

    const { user, signOut, address,} = useAuth()

    // useEffect(() => {
    //     const userRef = database().ref(`/users/${user.id}/address`)
    //     userRef
    //         .on('value', snapshot => {
    //             const data = snapshot.val()
    //             setAddress(data.neighborhood + ', ' + data.street + ', ' + data.number)
    //         });
    //     return () => {
    //         userRef.off('value')
    //     }
    // })

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

            </View>
        </View>
    )
}


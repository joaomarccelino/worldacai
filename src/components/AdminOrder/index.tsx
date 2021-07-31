import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type OrderType = {
    id: string;
    name: string;
    address: string;
    order: {
        size: string;
        syrup: string;
        fruit: string;
        free: string[];
        paid: string[];
        value: string;
    }
    status: string;
    totalValue: string;
    payment: {
        payment: string;
        change?: string
    }
    onPress: () => void
}

export function AdminOrder({id, name, address, order, status, onPress, totalValue, payment}: OrderType) {
    const [active, setActive] = useState(false)

    function handleActiveCard() {
        setActive(!active)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Pedido</Text>
            <Text style={styles.containerText}>{`Cliente: ${name}`}</Text>
            <Text style={styles.containerText}>{`Endereço: ${address}`}</Text>
            <Text style={styles.containerText}>{`Valor: R$ ${totalValue}`}</Text>
            { payment && <Text style={styles.containerText}>{`Forma de pagamento: ${payment.payment} `}{payment.change && `para ${payment.change}`}</Text>}
            <View style={styles.buttonArea}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            + Detalhes
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


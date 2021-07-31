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

export function UserOrder({id, name, address, order, status, onPress, totalValue, payment} : OrderType) {
    const [active, setActive] = useState(false)
    function handleActiveCard() {
        setActive(!active)
    }

    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.title}>{`Pedido: ${id}`}</Text>
            </View>
            <Text style={styles.containerText}>{`Valor: R$ ${totalValue}`}</Text>
            <Text style={styles.containerText}>{`Status: ${status} `}</Text>
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


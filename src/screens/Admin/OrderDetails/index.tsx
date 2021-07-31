import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import database from '@react-native-firebase/database'
import Icon from 'react-native-vector-icons/FontAwesome'
import { OrderAcaiCup } from "../../../components/OrderAcaiCup";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { OrderProps } from "../../../hooks/order";

export type DetailProps = {
    id: string;
    name: string;
    address: string;
    order: OrderProps[];
    status?: string;
    payment: {
        payment: string;
        change?: string;
    }
}

export function OrderDetails() {
    const route = useRoute()
    const { id, name, address, order, payment } = route.params as DetailProps

    function handleOrderStatus(status: string) {
        const orderRef = database().ref(`/orders/${id}/`)

        const userAddress = orderRef.update({
            status: status
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do pedido</Text>
            <View style={styles.header}>
                <Text style={styles.paymentTitle}>{`Cliente: ${name}`}</Text>
                <Text style={styles.paymentTitle}>{`Endereço: ${address}`}</Text>
                <View style={styles.paymentContainer}>
                    <Text numberOfLines={2} style={styles.paymentTitle}>Forma de pagamento: {`${payment.payment}`}{payment.change && ` para ${payment.change}`}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={order}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <OrderAcaiCup
                            id={item.id}
                            size={item.size}
                            syrup={item.syrup}
                            fruit={item.fruit}
                            free={item.free}
                            paid={item.paid}
                            acaiAmount={item.acaiAmount}
                            value={item.value}
                        />
                    }
                    contentContainerStyle={
                        {
                            paddingBottom: 69,
                        }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.waitContainer}>
                <TouchableOpacity onPress={() => handleOrderStatus('Preparando')}>
                    <View style={styles.button}>
                        <Icon name="hourglass" size={30} color={"#FFF"} />
                        <Text style={styles.buttonText}>
                            Em preparação
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOrderStatus('Saiu para entrega')}>
                    <View style={styles.button}>
                        <Icon name="motorcycle" size={30} color={"#FFF"} />
                        <Text style={styles.buttonText}>
                            Saiu para entrega
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOrderStatus('Entregue')}>
                    <View style={styles.button}>
                        <Icon name="smile-o" size={30} color={"#FFF"} />
                        <Text style={styles.buttonText}>
                            Entregue
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


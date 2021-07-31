import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';

import {
    FlatList,
    Text,
    View
} from 'react-native';
import { OrderAcaiCup } from '../../../components/OrderAcaiCup';
import { DetailProps } from '../../Admin/OrderDetails';
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles';
import { theme } from '../../../global/theme';
import { Load } from '../../../components/Load';
import { useEffect } from 'react';

export function UserOrderDetails() {
    const route = useRoute()
    const { order, status, payment } = route.params as DetailProps

    const [iconName, setIconName] = useState('')

    function getIconName(status: string | undefined) {
        switch (status) {
            case 'Preparando':
                setIconName('hourglass-1')
                break;
            case 'Saiu para entrega':
                setIconName('motorcycle')
                break;
            case 'Entregue':
                setIconName('smile-o')
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        getIconName(status)
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do pedido</Text>
            <View style={styles.paymentContainer}>
                <Text numberOfLines={2} style={styles.paymentTitle}>Forma de pagamento: {`${payment.payment}`}{payment.change && ` para ${payment.change}`}</Text>
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
                <View style={styles.waitContainer}>
                    <Text style={styles.waiting}>{`Status: ${status}`}</Text>
                    {
                        iconName !== '' ?
                            <Icon name={iconName} size={100} color={theme.colors.primaryButton} />
                            :
                            <Load />
                    }
                </View>

            </View>
        </View>
    );
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

import {
    Alert,
    FlatList,
    Modal,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { Load } from '../../../components/Load';
import { OrderAcaiCup } from '../../../components/OrderAcaiCup';
import { Select } from '../../../components/Select';
import { COLLECTION_ORDERS } from '../../../configs/database';
import data from '../../../data/data'
import { OrderProps, PaymentProps } from '../Order';
import { styles } from './styles';

type Props = {
    isVisible: boolean;
    onCancel: () => void;
    orders: OrderProps[];
}

export function MyItems({ isVisible, onCancel, orders }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            visible={isVisible}
            onRequestClose={onCancel}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.background} />
            </TouchableWithoutFeedback>
            <View style={styles.order}>
                <Text style={styles.orderTitle}>Meus items</Text>
                <View style={styles.body}>
                    <FlatList
                        data={orders}
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
                                showRemoveButton
                                orders={orders}
                            />
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.background} />
            </TouchableWithoutFeedback>
        </Modal>
    );
}
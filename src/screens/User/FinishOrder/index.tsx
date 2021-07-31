import React, { useState } from 'react';
import { useEffect } from 'react';

import {
    Alert,
    Modal,
    Text,
    TouchableWithoutFeedback,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Select } from '../../../components/Select';
import data from '../../../data/data'
import { PaymentProps } from '../Order';
import { styles } from './styles';

type Props = {
    value: number;
    isVisible: boolean;
    onCancel: () => void;
    onSave: ({ }: PaymentProps) => void;
}

export function FinishOrder({ isVisible, onCancel, value, onSave }: Props) {
    //formas de pagamento
    const payArray = data.paymentMethod
    const payMap = payArray.map((item) => {
        return { label: item, value: item }
    })
    const [payment, setPayment] = useState('')
    const [paymentList, setPaymentList] = useState(payMap)
    const [openPayment, setOpenPayment] = useState(false)

    //troco
    const [change, setChange] = useState('')

    const [paymentInfo, setPaymentInfo] = useState({} as PaymentProps)


    function handleConfirmOrder() {
        Alert.alert('Confirmar', 'Deseja enviar seu pedido?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => save()
                }
            ])
    }

    function save() {

        onSave && onSave(paymentInfo)
    }
    useEffect(() => {
        setPaymentInfo({
            payment,
            change
        })
    }, [payment, change])
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
            <View style={styles.container}>
                <Text style={styles.title}>Finalizar pedido</Text>
                <View style={styles.body}>
                    <Select
                        value={payment}
                        setValue={setPayment}
                        items={paymentList}
                        setItems={setPaymentList}
                        open={openPayment}
                        setOpen={setOpenPayment}
                        searchable={false}
                        placeholder={'forma de pagamento'}
                    />
                    {
                        payment === 'dinheiro com troco' &&
                        <TextInput style={styles.input} placeholder="Troco para" keyboardType={'numeric'} onChangeText={setChange} />
                    }
                    <Text style={styles.totalValue}>{`Valor total: R$ ${value}`}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
                        <Text style={styles.buttonText}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.background} />
            </TouchableWithoutFeedback>
        </Modal>
    );
}
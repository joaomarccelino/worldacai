import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLLECTION_ORDERS } from "../../configs/database";
import { OrderProps } from "../../screens/User/Order";
import { Cup } from "../Cup";
import { ListDivider } from "../ListDivider";
import { styles } from "./styles";
import uuid from 'react-native-uuid'
import data from '../../data/data'
import { useEffect } from "react";

type OrderAcaiCupType = {
    id: string;
    size: string;
    syrup: string;
    fruit: string;
    free: string[];
    paid: string[];
    value: string;
    acaiAmount: number;
    status?: string;
    orders?: OrderProps[];
    showRemoveButton?: boolean;
}


export function OrderAcaiCup({
    id,
    size,
    syrup,
    fruit,
    free,
    paid,
    value,
    acaiAmount,
    status,
    orders,
    showRemoveButton = false }: OrderAcaiCupType) {
    const [active, setActive] = useState(false)
    const [title, setTitle] = useState('')

    function handleActiveCard() {
        setActive(!active)
    }

    async function handleRemoveItem(id: string) {
        const newOrders = orders ? orders : []
        const index = newOrders.findIndex(item => item.id === id)
        newOrders.splice(index, 1)
        await AsyncStorage.setItem(COLLECTION_ORDERS, JSON.stringify(newOrders))
    }

    async function handleDuplicateItem(id: string) {
        const newOrders = orders ? orders : []
        const index = newOrders.findIndex(item => item.id === id)
        newOrders.push({...newOrders[index], id: uuid.v4().toString()})
        await AsyncStorage.setItem(COLLECTION_ORDERS, JSON.stringify(newOrders))
    }
    const sizes = data.size
    const boatSizes = data.boatSizes
    function getTitle() {
        if(sizes.includes(size)){
            setTitle('Copo')
        } else {
            if(boatSizes.includes(size)) {
                setTitle('World Barca')
            } else {
                setTitle('1 Litro')
            }
        }
    }

    useEffect(() => {
        getTitle()
    }, [])
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {active ?
                    <>
                        <Cup sliderValue={acaiAmount} />
                        <Text style={styles.containerText}>{`Tamanho: ${size}`}</Text>
                        <ListDivider />
                        <Text style={styles.containerText}>{`Calda: ${syrup}`}</Text>
                        <ListDivider />
                        <Text style={styles.containerText}>{`Fruta: ${fruit}`}</Text>
                        <ListDivider />
                        <Text style={styles.containerText}>{`Complementos não pagos: ${free}`}</Text>
                        <ListDivider />
                        <Text style={styles.containerText}>{`Complementos pagos: ${paid}`}</Text>
                        <ListDivider />
                        <Text style={styles.containerText}>{`Valor R$: ${value}`}</Text>
                        <ListDivider />
                        <View style={styles.buttonArea}>
                            {showRemoveButton &&
                                <>
                                    <TouchableOpacity onPress={() => handleDuplicateItem(id)}>
                                        <View style={styles.duplicateButton}>
                                            <Text style={styles.duplicateButtonText}>
                                                Duplicar
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleRemoveItem(id)}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Excluir
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            }
                        </View>
                    </>
                    :
                    <>
                        <Text style={styles.containerText}>{`Tamanho: ${size}`}</Text>
                        <Text style={styles.containerText}>{`Valor: R$ ${value}`}</Text>
                        {
                            status &&
                            <Text style={styles.containerText}>{`Status: ${status}`}</Text>
                        }
                    </>
                }
                <TouchableOpacity onPress={handleActiveCard}>
                    <View style={styles.detailButton}>
                        <Text style={styles.detailButtonText}>
                            {active ? '-' : '+'} Detalhes
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


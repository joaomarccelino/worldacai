import Slider from "@react-native-community/slider"
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Select } from "../../../components/Select";

import data from '../../../data/data'
import { theme } from "../../../global/theme";
import uuid from 'react-native-uuid'
import { Cup } from "../../../components/Cup";
import { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { COLLECTION_ORDERS } from "../../../configs/database";

export function BigCup() {

    const navigation = useNavigation()

    const [sliderValue, setSliderValue] = useState(0)

    //açai + cupuaçu ou apenas açai ou cupuaçu
    const [select, setSelect] = useState('')
    const [selectList, setSelectList] = useState(
        [{ label: 'açai + cupuaçu', value: 'both' },
        { label: 'açai', value: 'acai' },
        { label: 'cupuaçu', value: 'cupuacu' }]
    )
    const [selectOpen, setSelectOpen] = useState(false)

    const [showCup, setShowCup] = useState(false)


    //tipo de calda
    const arraySyrup = data.syrup
    const syrupMap = arraySyrup.map((item) => {
        return { label: item, value: item }
    })

    const [syrup, setSyrup] = useState('')
    const [syrupList, setSyrupList] = useState(syrupMap)
    const [openSyrup, setOpenSyrup] = useState(false)

    //frutas
    const arrayFruit = data.fruits
    const fruitMap = arrayFruit.map((item) => {
        return { label: item, value: item }
    })
    const [fruit, setFruit] = useState('')
    const [fruitList, setFruitList] = useState(fruitMap)
    const [openFruit, setOpenFruit] = useState(false)

    //complementos não pagos
    const arrayFree = data.freeComplements
    const freeMap = arrayFree.map((item) => {
        return { label: item, value: item }
    })
    const [free, setFree] = useState([])
    const [freeList, setFreeList] = useState(freeMap)
    const [openFree, setOpenFree] = useState(false)
    const [maxFree, setMaxFree] = useState(1)

    //complementos pagos
    const arrayPaid = data.paidComplements
    const paidMap = arrayPaid.map((item) => {
        return { label: item, value: item }
    })
    const [paid, setPaid] = useState([])
    const [paidList, setPaidList] = useState(paidMap)
    const [openPaid, setOpenPaid] = useState(false)

    const [activeSend, setActiveSend] = useState(true)

    const [totalValue, setTotalValue] = useState(0)

    function checkForm() {
        if (syrup !== '' && fruit !== '' && select !== '') {
            setActiveSend(false)
        }        
    }

    // renderiza ou não a opção de selecionar a quantidade de açai e cupuaçu
    function renderCup() {
        if (select === 'both') {
            setShowCup(true)
        } else {
            if (select === 'acai') {
                setSliderValue(100)
                setShowCup(false)
            } else {
                setSliderValue(0)
                setShowCup(false)
            }
        }
    }

    //calculo do valor de cada copo
    useEffect(() => {
        renderCup()
        checkForm()
        let parcialValue = 30
        let maxFree = 24
        setMaxFree(maxFree)
        setTotalValue(parcialValue + (paid.length * 5) + (free.length * 3))
    }, [syrup, fruit, free, paid, showCup, select])

    //salva cada item no armazenamento do aparelho
    async function handleAddAcai() {
        const newOrder = {
            id: uuid.v4(),
            size: '1 litro',
            syrup: syrup,
            fruit: fruit,
            free: free,
            paid: paid,
            acaiAmount: sliderValue,
            value: totalValue
        }
        const storage = await AsyncStorage.getItem(COLLECTION_ORDERS)

        const orders = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_ORDERS,
            JSON.stringify([...orders, newOrder]))
        navigation.navigate('Order')
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>1 Litro</Text>
            </View>
            <KeyboardAwareScrollView style={styles.body}>
                {showCup &&
                    <View style={styles.sliderArea}>
                        <Cup sliderValue={sliderValue} />
                        <View style={styles.slider}>
                            <Text style={styles.sliderText}>Açaí</Text>
                            <Slider
                                style={{ width: 200, height: 40 }}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor={theme.colors.blueViolet}
                                maximumTrackTintColor={theme.colors.cupuacu}
                                value={sliderValue}
                                onValueChange={value => setSliderValue(value)}
                            />
                            <Text style={styles.sliderText}>Cupuaçu</Text>
                        </View>
                        <Text style={styles.choice}>Escolha a quantidade de açai e de cupuaçu</Text>
                    </View>
                }
                <View style={styles.form}>
                    <Select
                        value={select}
                        setValue={setSelect}
                        items={selectList}
                        setItems={setSelectList}
                        open={selectOpen}
                        setOpen={setSelectOpen}
                        searchable={false}
                        placeholder={'selecione uma opção'}
                    />
                    <Select
                        value={syrup}
                        setValue={setSyrup}
                        items={syrupList}
                        setItems={setSyrupList}
                        open={openSyrup}
                        setOpen={setOpenSyrup}
                        searchable={false}
                        placeholder={'calda'}
                    />
                    <Select
                        value={fruit}
                        setValue={setFruit}
                        items={fruitList}
                        setItems={setFruitList}
                        open={openFruit}
                        setOpen={setOpenFruit}
                        searchable={false}
                        placeholder={'fruta(s)'}
                    />
                    <Select
                        value={free}
                        setValue={setFree}
                        items={freeList}
                        setItems={setFreeList}
                        open={openFree}
                        setOpen={setOpenFree}
                        searchable={false}
                        placeholder={'complementos não pagos'}
                        multipleText={'complementos não pagos: '}
                        multiple={true}
                        min={0}
                        max={maxFree}

                    />
                    {free?.map(value => {
                        return <Text style={styles.selectText} key={value}>{value}</Text>
                    })}
                    <Select
                        value={paid}
                        setValue={setPaid}
                        items={paidList}
                        setItems={setPaidList}
                        open={openPaid}
                        setOpen={setOpenPaid}
                        searchable={false}
                        placeholder={'complementos pagos'}
                        multipleText={'complementos pagos: '}
                        multiple={true}
                        min={0}
                        max={13}
                    />
                    {paid?.map(value => {
                        return <Text style={styles.selectText} key={value}>{value}</Text>
                    })}
                </View>
                <View style={styles.value}>
                    <Text style={styles.valueText}>{`Valor: R$${totalValue}`}</Text>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleAddAcai()}
                        disabled={activeSend}
                    >
                        <Text style={styles.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>

    )
}


import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Select } from "../Select";
import data from '../../data/data'
import { styles } from "./styles";
import { theme } from "../../global/theme";

export function ChangeAddress(props: any) {
    const arrayNeigh = data.neighborhood
    const neighMap = arrayNeigh.map((item) => {
        return { label: item, value: item }
    })

    const arrayStr = data.street
    const strMap = arrayStr.map((item) => {
        return { label: item, value: item }
    })

    const [neighborhood, setNeighborhood] = useState('')
    const [neighList, setNeighList] = useState(neighMap)
    const [openNeigh, setOpenNeigh] = useState(false)

    const [street, setStreet] = useState('')
    const [strList, setStrList] = useState(strMap)
    const [openStr, setOpenStr] = useState(false)

    const [number, setNumber] = useState('')

    const save = () => {
        const neigh = neighborhood
        const str = street
        const num = number
        props.onSave && props.onSave(neigh, str, num)
        setNeighborhood('')
        setStreet('')
        setNumber('')
    }


    return (
        <Modal transparent={true} visible={props.isVisible}
            onRequestClose={props.onCancel}
            animationType='slide'>
            <TouchableWithoutFeedback
                onPress={props.onCancel}
            >
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Alterar endereço</Text>
                </View>
                <View style={styles.form}>
                    <Select
                        value={neighborhood}
                        setValue={setNeighborhood}
                        items={neighList}
                        setItems={setNeighList}
                        open={openNeigh}
                        setOpen={setOpenNeigh}
                        searchable={true}
                        placeholder={'bairro'}
                        searchPlaceholder={'procure o bairro'}
                    />
                    <Select
                        value={street}
                        setValue={setStreet}
                        items={strList}
                        setItems={setStrList}
                        open={openStr}
                        setOpen={setOpenStr}
                        searchable={true}
                        placeholder={'rua'}
                        searchPlaceholder={'procure a rua'}
                    />
                    <TextInput
                        value={number}
                        onChangeText={setNumber}
                        placeholder={"nº"}
                        style={styles.input}
                        placeholderTextColor={'#999'}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={save}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableWithoutFeedback
                onPress={props.onCancel}
            >
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


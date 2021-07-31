import React from "react"
import { StyleSheet, View } from "react-native"
import { styles } from "./styles"

export function Cup(props: any) {
    return (
        <View style={styles.container}>
                <View style={styles.circle}>
                    <View style={[styles.circleFill, { height: props.sliderValue }]} />
                </View>
        </View>
    )
}


import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./styles";

type Props = RectButtonProps & {
    title: string;
}

export function AdminButton({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >   
            <Icon name="cup" size={100} color={'#fff'} />
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}
import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: theme.colors.blueViolet,
        marginVertical: 15,
        borderRadius: 8
    },
    containerText: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 14,
        color: '#fff'
    },
    paymentTitle: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 17,
        color: '#fff'
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 17,
        color: theme.colors.cupuacu
    },
    buttonArea: {
        alignItems: 'center'
    },
    button: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: theme.colors.cupuacu
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: theme.colors.lightText
    }
})
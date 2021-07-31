import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: theme.colors.blueViolet,
        margin: 5,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: theme.colors.bgViolet,
        width: 300,
    },
    containerText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: '#fff'
    },
    titleArea: {
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        color: '#FFF'
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    duplicateButton: {
        backgroundColor: theme.colors.primaryButton,
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    duplicateButtonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: '#fff'
    },
    button: {
        backgroundColor: 'red',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: '#fff'
    },
    detailButton: {

    },
    detailButtonText: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.textPrimary
    }
})
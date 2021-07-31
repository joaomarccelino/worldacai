import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: theme.colors.bgViolet,

    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    titleText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        marginHorizontal: 10
    },
    form: {
        backgroundColor: theme.colors.background,
        padding: 20
    },
    input: {
        backgroundColor: theme.colors.selectedViolet,
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.lightText,
        borderRadius: 8,
        paddingLeft: 10

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 50,
        borderWidth: 2,
        borderColor: theme.colors.primaryButton,
        borderRadius: 8
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.primaryButton
    },
    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 50,
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        borderRadius: 8
    },
    cancelButtonText: {
        fontFamily: theme.fontFamily.bold,
        color: 'red'
    },

})
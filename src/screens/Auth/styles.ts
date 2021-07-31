import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        width: 300,
        height: 300,
        borderRadius: 150
    },
    loginButton: {
        backgroundColor: theme.colors.background,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        marginRight: 10
    }
})
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgViolet,
        paddingTop: getStatusBarHeight()
    },
    header: {
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        flex: 2
    },
    body: {
        flex: 8,
        backgroundColor: theme.colors.background,
        padding: 30
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        marginVertical: 20,
        color: theme.colors.textPrimary,
        textAlign: 'center',        
    },
    waitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
    },
    waiting: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        color: theme.colors.textPrimary,
        marginBottom: 35
    },
    paymentContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    paymentTitle: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 14
    },
    paymentText: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 15
    },
    button: {
        backgroundColor: theme.colors.azure,
        width: 100,
        height: 80,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 12,
        color: 'white'
    }
})
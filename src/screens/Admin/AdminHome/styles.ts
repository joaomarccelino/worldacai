import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.bgViolet,
        flex: 1,
        alignItems: 'center'
    },
    header: {
        padding: 30,
    },
    headerContent: {
        padding: 20,
        backgroundColor: theme.colors.lightText,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButton: {
        marginTop: 10,
        backgroundColor: 'red',
        paddingHorizontal: 15
    },
    logoutButtonText: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.lightText
    },
    nameAddress: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18
    },
    address: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 13
    },
    addressButton: {
        marginTop: 15,
        backgroundColor: theme.colors.orange,
        padding: 8
    },
    addressText: {
        fontFamily: theme.fontFamily.bold,
        color: "#FFF"
    },
    body: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    bodyButton: {
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 15
    },
    bodyText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18
    }
})
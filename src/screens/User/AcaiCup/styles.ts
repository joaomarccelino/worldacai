import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgViolet,
        paddingTop: getStatusBarHeight(),
        justifyContent: 'space-between'
    },
    body: {
        backgroundColor: theme.colors.background,
        flex: 1
    },
    header: {
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        color: theme.colors.textPrimary,
        textAlign: 'center'
    },
    sliderArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderText: {
        fontFamily: theme.fontFamily.bold
    },
    choice: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 12,
        marginTop: 15
    },
    form: {
        marginTop: 15,
        paddingHorizontal: '10%'
    },
    selectText: {
        fontFamily: theme.fontFamily.bold
    },
    value: {
        alignItems: 'center',
        marginTop: 30
    },
    valueText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20
    },
    buttonArea: {
        alignItems: 'center',
        marginBottom: 15
    },
    button: {
        borderWidth: 2,
        borderColor: theme.colors.primaryButton,
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 8
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: theme.colors.primaryButton
    }

})
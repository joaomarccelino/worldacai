import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from './../../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        flex: 2,
        backgroundColor: theme.colors.bgViolet,
        paddingTop: getStatusBarHeight(),
        
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        textAlign: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'space-between',
        paddingTop: 15,
        alignItems: 'center',
        paddingHorizontal: '5%',
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
    totalValue: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        borderWidth: 2,
        borderColor: theme.colors.primaryButton,
        alignItems: "center",
        justifyContent: 'center',
        width: 110,
        height: 50,
        borderRadius: 8,
        marginBottom: 15,
    },
    buttonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: theme.colors.primaryButton,
        textAlign: 'center'
    }
});
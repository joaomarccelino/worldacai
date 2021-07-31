import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from './../../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgViolet,
        paddingTop: getStatusBarHeight()
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
        alignItems: 'center'
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
        fontSize: 16
    },
    paymentText: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 15
    }
});
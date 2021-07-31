import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from './../../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    body: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.background,
        alignItems: 'center'
    },
    order: {
        flex: 3,
        backgroundColor: theme.colors.bgViolet,
        width: "100%",      
    },
    orderTitle: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        color: theme.colors.textPrimary,
        textAlign: 'center'
    }
});
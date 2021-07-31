import { theme } from './../../../global/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: theme.colors.bgViolet,
        width: '100%'
    },
    header: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    content: {
        flex: 1,
        backgroundColor: theme.colors.background,
        width: '100%',
        paddingHorizontal: 15
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        color: theme.colors.textPrimary,
        textAlign: 'center'
    }
})
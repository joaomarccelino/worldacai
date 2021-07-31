import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.selectedViolet,
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderRadius: 8
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: theme.colors.lightText,
        textAlign: 'center'
    }
})
import { theme } from './../../global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        minHeight: 160,
        maxHeight: 160,
        paddingVertical: 15,
        borderRadius: 8
    },
    menuItem: {
        width: 104,
        height: 120,
        marginLeft: 15,
        backgroundColor: theme.colors.selectedViolet,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    text: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.lightText,
        fontSize: 15
    }
});
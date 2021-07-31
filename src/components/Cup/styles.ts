import { theme } from './../../global/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    circle: {
        width: 50,
        height: 100,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: theme.colors.cupuacu,
        overflow: 'hidden',
    },
    circleFill: {
        backgroundColor: 'purple',
        width: '100%',
        bottom: 0,
        position: 'absolute'
    },
})
import { theme } from './../../../global/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgViolet,
        paddingTop: getStatusBarHeight(),
        justifyContent: 'space-between'
    },
    body: {
        flex: 1,
        backgroundColor: theme.colors.background,
        width: '100%',
        paddingTop: 15,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    header: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 25,
        color: theme.colors.textPrimary,
        textAlign: 'center'
    },    
    order: {
        flex: 1,
        alignItems: "center",
        width: "100%", 
        justifyContent: 'center'       
    },
    totalValue: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        color: theme.colors.selectedViolet  
    },
    myItemsButton: {
        backgroundColor: theme.colors.background,
        borderWidth: 2,
        borderColor: theme.colors.selectedViolet,
        padding: 15,
        borderRadius: 8,
        
    },
    myItemsText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: theme.colors.selectedViolet
    },
    orderButtonArea: {
        alignItems: 'center',
        marginBottom: 20
    },
    orderButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 60,
        borderWidth: 2,
        borderColor: theme.colors.primaryButton,
        borderRadius: 8
    },
    orderButtonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: theme.colors.primaryButton
    }
})
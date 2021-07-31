import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: "center",
        paddingVertical: getStatusBarHeight(),
    },
    headerContent: {
        paddingTop: 20,        
        paddingHorizontal: 30,
        flexDirection: 'row',
    },    
    profilePic: {
        marginLeft: 50
    },
    userPic: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    nameAddress: {
        justifyContent: 'space-between',
        paddingHorizontal: 40
    },
    name: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 18,
        color: "#151515"
    },
    address: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 15,
        color: "#151515"
    },
    buttonArea:{
        flexDirection: 'row',
        marginTop: 5,
        width: '80%',
        justifyContent: 'space-between'
    },
    addressButton: {
        borderWidth: 2,
        borderColor: theme.colors.selectedViolet,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        marginRight: 10,
        borderRadius: 8,
    },
    addressText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: theme.colors.selectedViolet,
    },
    logoutButton: {
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 8,
    },
    logoutButtonText: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 15,
        color: 'red'
    },
});
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { theme } from "../../global/theme";
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID } from "../../utils/keys";



export function Auth() {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: WEB_CLIENT_ID,
            offlineAccess: false
        })
    })

    const { googleLogin } = useAuth()

    return (
        <LinearGradient style={styles.body} colors={[theme.colors.bgViolet, theme.colors.selectedViolet]}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
            <TouchableOpacity onPress={() => googleLogin()}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        entre com google
                    </Text>
                    <Icon name="google" color={'red'} size={35} />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}


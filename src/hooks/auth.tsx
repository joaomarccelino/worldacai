import React, { ReactNode, useState, useContext, createContext, useEffect } from 'react'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USERS } from '../configs/database'


type User = {
    id: string;
    name: string | null;
    photo: string | null;
    type: string;
}

type UserData = {
    address: {
        neighborhood: string;
        street: string;
        number: string;
    }
    type?: string;
}

type AuthContextData = {
    user: User;
    address: string;
    type?: string;
    googleLogin: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)

    const [address, setAddress] = useState('')

    const [admin, setAdmin] = useState('')

    async function googleLogin() {
        const { idToken } = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken)

        return await auth().signInWithCredential(googleCredential).then(value => {
            const userRef = database().ref(`/users/${value.user.uid}`)
            userRef
                .once('value', snapshot => {
                    const data: UserData = snapshot.val() || {}
                    data.address && setAddress(data.address.neighborhood + ', ' + data.address.street + ', ' + data.address.number)
                    const newUser = {
                        id: value.user.uid,
                        name: value.user.displayName,
                        photo: value.additionalUserInfo?.profile?.picture,
                        type: data.type || 'user'
                    }
                    setUser(newUser)
                    AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(newUser))
                })
        })
    }

    async function signOut() {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            await AsyncStorage.removeItem(COLLECTION_USERS)
            setUser({} as User)
            setAdmin('')
        } catch (error) {
            console.error(error);
        } finally {
            setUser({} as User)
        }
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS)
        if (storage) {
            const userLogged = JSON.parse(storage) as User
            setUser(userLogged)
        }
    }

    useEffect(() => {
        loadUserStorageData()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            address,
            googleLogin,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    useAuth
}
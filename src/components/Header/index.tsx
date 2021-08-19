import React from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

type HeaderProps = {
    handleAddress: () => void;
}

export function Header({ handleAddress }: HeaderProps) {

    const { user, signOut} = useAuth()

    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <View style={styles.profilePic}>
                    {user.photo ?
                        <Image style={styles.userPic} source={{ uri: user.photo }} /> :
                        <Icon name={'user-circle'} size={100} color={'#151515'} />
                    }
                </View>
                <View style={styles.nameAddress}>
                    <Text style={styles.name}>{user.name}</Text>
                    {user.address === '' ?
                        <>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity onPress={handleAddress}>
                                    <View style={styles.addressButton}>
                                        <Text style={styles.addressText}>
                                            + Endereço
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
                                    <Text style={styles.logoutButtonText}>sair</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <>
                            <Text numberOfLines={3} style={styles.address}>{user.address}</Text>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity onPress={handleAddress}>
                                    <View style={styles.addressButton}>
                                        <Text style={styles.addressText}>
                                            Alterar
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
                                    <Text style={styles.logoutButtonText}>Sair</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }

                </View>
            </View>
        </View>
    );
}
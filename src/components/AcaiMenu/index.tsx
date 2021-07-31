import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function AcaiMenu() {
    const navigation = useNavigation()
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 10 }}
            >
            <TouchableOpacity style={styles.menuItem}
                onPress={() => navigation.navigate('AcaiCup')}
            >
                <Icon name="cup" color={theme.colors.lightText} size={60} />
                <Text style={styles.text}>copo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}
                onPress={() => navigation.navigate('AcaiBoat')}
            >
                <Icon name="sail-boat" color={theme.colors.lightText} size={60} />
                <Text style={styles.text}>world barca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}
                onPress={() => navigation.navigate('BigCup')}>
                <Icon name="bucket" color={theme.colors.lightText} size={60} />
                <Text style={styles.text}>1 litro</Text>
            </TouchableOpacity>
        </ScrollView>

    );
}
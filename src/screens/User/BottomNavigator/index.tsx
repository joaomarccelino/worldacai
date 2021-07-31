import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home } from '../Home';
import { theme } from '../../../global/theme';
import { Order } from '../Order';
import { MyOrders } from '../MyOrders';
const { Navigator, Screen } = createMaterialBottomTabNavigator()

export function BottomNavigator() {
    return (
        <Navigator
            barStyle={{ backgroundColor: theme.colors.bgViolet }}
            activeColor={"#FFF"}
            inactiveColor={'#151515'}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={19} />
                    ),
                }}
            />
            <Screen
                name="Order"
                component={Order}
                options={{
                    tabBarLabel: 'Pedir',
                    tabBarIcon: ({ color }) => (
                        <Icon name="map-marker" color={color} size={19} />
                    ),
                }}
            />
            <Screen
                name="Meus pedidos"
                component={MyOrders}
                options={{
                    tabBarLabel: 'Meus Pedidos',
                    tabBarIcon: ({ color }) => (
                        <Icon name="motorcycle" color={color} size={19} />
                    ),
                }}
            />
        </Navigator>
    )
}
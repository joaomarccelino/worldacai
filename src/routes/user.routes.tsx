import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AcaiCup } from '../screens/User/AcaiCup'
import { AcaiBoat } from '../screens/User/AcaiBoat'
import { UserOrderDetails } from '../screens/User/UserOrderDetails'
import { BottomNavigator } from '../screens/User/BottomNavigator'
import { BigCup } from '../screens/User/BigCup'

const { Navigator, Screen } = createStackNavigator()

export function UserRoutes() {
    return (
        <Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Screen name="BottomNavigator" component={BottomNavigator} />
            <Screen name="AcaiCup" component={AcaiCup} />
            <Screen name="AcaiBoat" component={AcaiBoat} />
            <Screen name="BigCup" component={BigCup} />
            <Screen name="UserOrderDetails" component={UserOrderDetails} />
        </Navigator>
    )
}
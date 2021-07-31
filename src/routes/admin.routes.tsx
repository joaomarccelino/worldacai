import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OrderDetails } from '../screens/Admin/OrderDetails'
import { AdminHome } from '../screens/Admin/AdminHome'
import { AdminOrders } from '../screens/Admin/AdminOrders'

const { Navigator, Screen } = createStackNavigator()

export function AdminRoutes() {
    return(
        <Navigator initialRouteName="AdminHome" screenOptions={{
            headerShown: false
        }}>
            <Screen name="AdminHome" component={AdminHome} />
            <Screen name="AdminOrders" component={AdminOrders} />
            <Screen name="OrderDetails" component={OrderDetails}/>
        </Navigator>
    )
}
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { Auth } from "../screens/Auth";
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from './admin.routes';

export function Routes() {
    const { user } = useAuth()
    function renderRoutes() {
        if(user.id) {
            if(user.type === 'admin') {
                return(
                    <AdminRoutes />
                )
            } else {
                return (
                    <UserRoutes />
                )
            }
        } else {
            return (
                <Auth />
            )
        }
    }
    return (
        <NavigationContainer>
            {/* {user.id? <UserRoutes /> : <Auth />} */}
            {renderRoutes()}
        </NavigationContainer>
    )
}
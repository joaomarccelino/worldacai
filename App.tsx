import React from 'react'
import { StatusBar } from 'react-native'
import { AuthProvider } from './src/hooks/auth'
import { Routes } from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </>
  )
}
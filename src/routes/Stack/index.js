import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
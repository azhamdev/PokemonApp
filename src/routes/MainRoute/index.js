import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../Stack';

export default function MainRoute() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
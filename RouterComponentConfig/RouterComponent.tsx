import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from '../components/MainComponent';
import { CreateForm } from '../components/CreateForm';

const Stack = createStackNavigator();

export const RouterComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainComponent} />
                <Stack.Screen name="CreateForm" component={CreateForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Catalog from '../pages/Catalog';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#313746' },
                }}
                initialRouteName="Catalog"
            >
                <Stack.Screen
                    name="Catalog"
                    component={Catalog}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

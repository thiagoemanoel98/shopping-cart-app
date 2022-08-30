import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Catalog from '../pages/Catalog';
import Header from '../components/Header';
import Cart from '../pages/Cart';

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
                        headerTitleAlign: 'center',
                        headerTitle: () => <Header />,
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{

                        headerTransparent: true,
                        headerTitleAlign: 'center',
                        headerBackTitleVisible: false,
                        headerTitle: () => <Header />,
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                        headerBackImage: () => (
                            <FeatherIcon
                                name="chevron-left"
                                size={24}
                                color="#fef9ff"
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

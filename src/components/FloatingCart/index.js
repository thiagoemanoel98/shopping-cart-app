import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
    CardButton,
    CartButtonText,
    CartPricing,
    CartTotalPrice,
    Container,
} from './styles';

export default function FloatingCart() {
    const navigation = useNavigation();

    return (
        <Container>
            <CardButton onPress={() => navigation.navigate('Cart')}>
                <FeatherIcon size={24} name="shopping-cart" color="#f3f9ff" />
                <CartButtonText>2 itens</CartButtonText>
                <CartPricing>
                    <CartTotalPrice>R$ 200, 00</CartTotalPrice>
                </CartPricing>
                <FeatherIcon size={24} name="chevron-right" color="#f3f9ff" />
            </CardButton>
        </Container>
    );
}

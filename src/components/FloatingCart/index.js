import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
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

    const products = useSelector(({ cart }) => cart);

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount  = products.reduce((accumulator, product) => {

            const totalPrice = accumulator + product.price * product.amount;
            return totalPrice;
        }, 0)
        return cartAmount;
    });

    return (
        <Container>
            <CardButton onPress={() => navigation.navigate('Cart')}>
                <FeatherIcon size={24} name="shopping-cart" color="#f3f9ff" />
                <CartButtonText>{cartSize}</CartButtonText>
                <CartPricing>
                    <CartTotalPrice>R$ {cartTotal}</CartTotalPrice>
                </CartPricing>
                <FeatherIcon size={24} name="chevron-right" color="#f3f9ff" />
            </CardButton>
        </Container>
    );
}

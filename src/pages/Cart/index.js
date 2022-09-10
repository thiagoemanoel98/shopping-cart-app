import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../components/EmptyCart';

import * as CartActions from '../../store/modules/cart/actions';

import {
    ActionButton,
    ActionContainer,
    Container,
    Product,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles';

export default function Cart() {
    const dispatch = useDispatch();

    const products = useSelector(({ cart }) => cart);

    // Variáveis só renderiza quando o estado do produto for alterado
    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    // Variáveis só renderiza quando o estado do produto for alterado
    // Para paginas/componentes muito grande... isso faz diferença
    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((accumulator, product) => {
            const totalPrice = accumulator + product.price * product.amount;
            return totalPrice;
        }, 0);

        return 'R$ ' + cartAmount;
    }, [products]);

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    function removeFromCart(id) {
        dispatch(CartActions.removeFromCart(id));
    }

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    ListEmptyComponent={<EmptyCart />}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductPrice>
                                        {'R$ ' + item.price}
                                    </ProductPrice>
                                </ProductPriceContainer>

                                <TotalContainer>
                                    <ProductQuantity>
                                        {item.amount + 'x'}
                                    </ProductQuantity>

                                    <ProductPrice>
                                        {item.price * item.amount}
                                    </ProductPrice>
                                </TotalContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton onPress={() => increment(item)}>
                                    <FeatherIcon
                                        name="plus"
                                        color={'#E83f5b'}
                                        size={16}
                                    />
                                </ActionButton>
                                <ActionButton
                                    onPress={() => {
                                        item.amount > 1
                                            ? decrement(item)
                                            : removeFromCart(item.id);
                                    }}
                                >
                                    <FeatherIcon
                                        name="minus"
                                        color={'#E83f5b'}
                                        size={16}
                                    />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProductsContainer>
                <FeatherIcon name="shopping-cart" color={'#fff'} size={24} />
                <TotalProductsText>
                    {cartSize} {cartSize === 1 ? 'item' : 'itens'}{' '}
                </TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
}

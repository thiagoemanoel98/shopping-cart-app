import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EmptyCart from '../../components/EmptyCart';

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
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150,
            quantity: 1,
        },
        {
            id: '2',
            title: 'Assinatura Trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150,
            quantity: 2,
        },
        {
            id: '3',
            title: 'Assinatura Trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150,
            quantity: 1,
        },
    ]);

    // Variáveis só renderiza quando o estado do produto for alterado
    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    // Variáveis só renderiza quando o estado do produto for alterado
    // Para paginas/componentes muito grande... isso faz diferença
    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((accumulator, product) => {
            const totalPrice = accumulator + product.price * product.quantity;
            return totalPrice;
        }, 0);

        return 'R$ ' + cartAmount;
    }, [products]);

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
                                        {item.quantity + 'x'}
                                    </ProductQuantity>

                                    <ProductPrice>
                                        {item.price * item.quantity}
                                    </ProductPrice>
                                </TotalContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton onPress={() => {}}>
                                    <FeatherIcon
                                        name="plus"
                                        color={'#E83f5b'}
                                        size={16}
                                    />
                                </ActionButton>
                                <ActionButton onPress={() => {}}>
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

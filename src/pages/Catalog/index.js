import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';
import api from '../../services/api';

import {
    Container,
    PriceContainer,
    Product,
    ProductButton,
    ProductButtonText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
} from './styles.js';

export default function Catalog() {
    /*const [products, setProducts] = React.useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150,
        },
        {
            id: '2',
            title: 'Assinatura Anual',
            image_url:
                'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150,
        },
    ]);*/

    const [products, setProducts] = React.useState([]);
    React.useState(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            console.log(data);
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitle>{item.title}</ProductTitle>

                            <PriceContainer>
                                <ProductPrice>{`R$ ${item.price}`}</ProductPrice>
                                <ProductButton onPress={() => {}}>
                                    <ProductButtonText>
                                        Adicionar
                                    </ProductButtonText>
                                    <FeatherIcon
                                        size={30}
                                        name="plus-circle"
                                        color="#d1d7e9"
                                    />
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <FloatingCart />
        </Container>
    );
}

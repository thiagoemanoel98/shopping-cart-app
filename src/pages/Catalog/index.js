import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

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
    const dispatch = useDispatch();

    const [products, setProducts] = React.useState([]);
    React.useState(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            console.log(data);
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddToCart(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

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

                                <ProductButton
                                    onPress={() => handleAddToCart(item.id)}
                                >
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

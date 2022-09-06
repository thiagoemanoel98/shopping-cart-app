import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/store';
export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar barStyle="light" backgroundColor="#312e38" />
                <Routes />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

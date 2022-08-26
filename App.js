import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" backgroundColor="#312e38"/>
     <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

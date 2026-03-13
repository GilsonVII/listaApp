import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ProdutoListaScreen from './src/view/screens/ProdutoListaScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProdutoListaScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

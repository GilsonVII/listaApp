import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ProdutoListaScreen from './src/view/screens/ProdutoListaScreen';
import { appStyles as styles } from './src/styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProdutoListaScreen />
    </SafeAreaView>
  );
}

import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useProdutoViewModel } from '../../viewModels/useProdutoViewModel';
import { ProdutoItem } from '../components/ProdutoItem';

export default function ProdutoListaScreen() {
  const { 
    produtos, 
    nomeDigitado, 
    setNomeDigitado, 
    mensagemErro, 
    adicionarProduto 
  } = useProdutoViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto..."
        value={nomeDigitado}
        onChangeText={setNomeDigitado}
      />
      {mensagemErro !== '' && (
        <Text style={styles.error}>{mensagemErro}</Text>
      )}
      <Button title="Adicionar" onPress={adicionarProduto} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoItem nome={item.nome} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
  list: { marginTop: 20 }
});
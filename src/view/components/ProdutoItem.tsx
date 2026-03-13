import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProdutoItemProps {
  nome: string;
}

export function ProdutoItem({ nome }: ProdutoItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>📦 {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
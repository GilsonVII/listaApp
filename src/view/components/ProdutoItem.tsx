import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { produtoItemStyles as styles } from '../../styles/globalStyles';

interface ProdutoItemProps {
  nome: string;
  onDelete: () => void;
}

export function ProdutoItem({ nome, onDelete }: ProdutoItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>📦 {nome}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.botaoDelete}>
        <Text style={styles.textoDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

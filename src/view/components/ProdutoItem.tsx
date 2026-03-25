import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { produtoItemStyles as styles } from '../../styles/globalStyles';

interface ProdutoItemProps {
  nome: string;
  onDelete: () => void;
  onDetalhes: () => void;
}

export function ProdutoItem({ nome, onDelete, onDetalhes }: ProdutoItemProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onDetalhes} activeOpacity={0.8}>
      <Text style={styles.texto}>📦 {nome}</Text>

      <TouchableOpacity onPress={onDelete} style={styles.botaoDelete}>
        <Text style={styles.textoDelete}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
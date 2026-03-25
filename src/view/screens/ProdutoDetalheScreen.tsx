import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Types';
import { detalheScreenStyles as styles } from '../../styles/globalStyles';

type DetalheRouteProp = RouteProp<RootStackParams, 'Detalhe'>;

export default function ProdutoDetalheScreen() {
  const route = useRoute<DetalheRouteProp>();
  const navigation = useNavigation();
  const { nome, descricao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSPEÇÃO DE ITEM</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>NOME DO PRODUTO:</Text>
        <Text style={styles.value}>{nome}</Text>

        <Text style={styles.label}>DESCRIÇÃO:</Text>
        <Text style={styles.valueDescricao}>{descricao}</Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>RETORNAR AO INVENTÁRIO</Text>
      </TouchableOpacity>
    </View>
  );
}
import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Animated, Alert, Platform } from 'react-native';
import { useProdutoViewModel } from '../../viewModels/useProdutoViewModel';
import { ProdutoItem } from '../components/ProdutoItem';
import { listaScreenStyles as styles } from '../../styles/globalStyles';

const AnimatedBotao = Animated.createAnimatedComponent(TouchableOpacity);

export default function ProdutoListaScreen() {
  const { 
    produtos, 
    nomeDigitado, 
    setNomeDigitado, 
    mensagemErro, 
    adicionarProduto,
    removerProduto 
  } = useProdutoViewModel();

  const animacaoRGB = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacaoRGB, {
          toValue: 1,
          duration: 2000, 
          useNativeDriver: false, 
        }),
        Animated.timing(animacaoRGB, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        })
      ])
    ).start();
  }, []);

  const corBordaAnimada = animacaoRGB.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [
      'rgb(255, 0, 0)',   
      'rgb(0, 255, 0)',   
      'rgb(0, 0, 255)',   
      'rgb(255, 16, 240)' 
    ]
  });

  const confirmarExclusao = (id: string, nome: string) => {
    if (Platform.OS === 'web') {
      const querDeletar = window.confirm(`Tem certeza que quer excluir o item "${nome}"?`);
      if (querDeletar) {
        removerProduto(id);
      }
    } else {
      Alert.alert(
        'Aviso do Sistema',
        `Tem certeza que quer excluir o item "${nome}"?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Excluir', style: 'destructive', onPress: () => removerProduto(id) }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto..."
        placeholderTextColor="#999"
        value={nomeDigitado}
        onChangeText={setNomeDigitado}
      />
      {mensagemErro !== '' && (
        <Text style={styles.error}>{mensagemErro}</Text>
      )}
      <AnimatedBotao 
        style={[styles.botaoAdicionar, { borderColor: corBordaAnimada }]} 
        activeOpacity={0.6} 
        onPress={adicionarProduto}
      >
        <Text style={styles.textoBotao}>Adicionar Produto</Text>
      </AnimatedBotao>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProdutoItem 
            nome={item.nome} 
            onDelete={() => confirmarExclusao(item.id, item.nome)} 
          />
        )}
        style={styles.list}
      />
    </View>
  );
}
import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Animated, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/Types';
import { useProdutoViewModel } from '../../viewModels/useProdutoViewModel';
import { ProdutoItem } from '../components/ProdutoItem';
import { listaScreenStyles as styles } from '../../styles/globalStyles';

const AnimatedBotao = Animated.createAnimatedComponent(TouchableOpacity);
type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

export default function ProdutoListaScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { 
    produtos, 
    nomeDigitado, 
    setNomeDigitado, 
    descricaoDigitada,
    setDescricaoDigitada, 
    mensagemErro, 
    adicionarProduto,
    removerProduto 
  } = useProdutoViewModel();

  const animacaoRGB = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacaoRGB, { toValue: 1, duration: 2000, useNativeDriver: false }),
        Animated.timing(animacaoRGB, { toValue: 0, duration: 2000, useNativeDriver: false })
      ])
    ).start();
  }, []);

  const corBordaAnimada = animacaoRGB.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 16, 240)']
  });

  const confirmarExclusao = (id: string, nome: string) => {
    if (Platform.OS === 'web') {
      const querDeletar = window.confirm(`Excluir "${nome}"?`);
      if (querDeletar) removerProduto(id);
    } else {
      Alert.alert('Aviso', `Excluir "${nome}"?`, [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => removerProduto(id) }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INVENTÁRIO</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto..."
        placeholderTextColor="#999"
        value={nomeDigitado}
        onChangeText={setNomeDigitado}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do produto..."
        placeholderTextColor="#999"
        value={descricaoDigitada}
        onChangeText={setDescricaoDigitada}
      />
      
      {mensagemErro !== '' && <Text style={styles.error}>{mensagemErro}</Text>}

      <AnimatedBotao 
        style={[styles.botaoAdicionar, { borderColor: corBordaAnimada }]} 
        activeOpacity={0.6} 
        onPress={adicionarProduto}
      >
        <Text style={styles.textoBotao}>CADASTRAR ITEM</Text>
      </AnimatedBotao>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProdutoItem 
            nome={item.nome} 
            onDelete={() => confirmarExclusao(item.id, item.nome)} 
            onDetalhes={() => navigation.navigate('Detalhe', { id: item.id, nome: item.nome, descricao: item.descricao })}
          />
        )}
        style={styles.list}
      />
    </View>
  );
}
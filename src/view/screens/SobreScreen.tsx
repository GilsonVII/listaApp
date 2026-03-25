import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SobreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SISTEMA INICIADO</Text>
      
      <View style={styles.terminal}>
        <Text style={styles.linha}> Desenvolvedor: Gilson J. Rezende</Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>DESCONECTAR (VOLTAR)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#121214', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: 'rgba(255, 16, 240, 0.8)', fontFamily: 'monospace', textAlign: 'center', marginBottom: 40, letterSpacing: 3 },
  terminal: { backgroundColor: '#000', padding: 20, borderRadius: 8, borderWidth: 1, borderColor: '#333', marginBottom: 40 },
  linha: { color: '#00FF00', fontSize: 16, fontFamily: 'monospace', marginBottom: 10 },
  botaoVoltar: { backgroundColor: 'transparent', padding: 16, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255, 16, 240, 0.5)' },
  textoBotao: { color: '#FFF', fontWeight: 'bold', fontFamily: 'monospace' }
});
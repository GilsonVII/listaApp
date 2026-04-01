import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmojiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👾</Text>
      <Text style={styles.texto}>SETOR DE ANOMALIAS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121214', justifyContent: 'center', alignItems: 'center' },
  emoji: { fontSize: 120, marginBottom: 20 },
  texto: { color: '#00FF00', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', letterSpacing: 2 }
});
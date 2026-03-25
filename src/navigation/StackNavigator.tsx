import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './Types';
import ProdutoListaScreen from '../view/screens/ProdutoListaScreen';
import ProdutoDetalheScreen from '../view/screens/ProdutoDetalheScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#121214' },
        headerTintColor: '#E1E1E6',
        headerTitleStyle: { fontFamily: 'monospace', fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={ProdutoListaScreen} 
        options={{ title: 'INVENTÁRIO' }}
      />
      <Stack.Screen 
        name="Detalhe" 
        component={ProdutoDetalheScreen} 
        options={{ title: 'DETALHES' }} 
      />
    </Stack.Navigator>
  );
}
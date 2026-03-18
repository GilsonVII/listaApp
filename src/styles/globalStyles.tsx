import { StyleSheet, Platform } from 'react-native';

const cores = {
  fundo: '#121214',
  card: '#202024',
  textoPrincipal: '#E1E1E6',
  textoSecundario: '#A8A8B3',
  destaque: '#8257E5', 
  perigo: '#E55959',
  borda: '#323238'
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
});

export const listaScreenStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 24, 
    paddingTop: 60,
    backgroundColor: '#121214' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#E1E1E6',
    marginBottom: 24,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 16, 240, 0.5)', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: { 
    backgroundColor: 'rgba(192, 192, 192, 0.25)',
    color: '#FFF',
    padding: 18, 
    marginBottom: 16, 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  error: { 
    color: '#E55959', 
    marginBottom: 16,
    fontWeight: '500'
  },
  botaoAdicionar: {
    backgroundColor: 'rgba(255, 16, 240, 0.40)',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2, 
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'monospace',
  },
  list: { 
    marginTop: 8 
  }
});

export const produtoItemStyles = StyleSheet.create({
  card: {
    backgroundColor: cores.card,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: cores.borda,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5 },
      android: { elevation: 5 },
      web: { boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' as any }
    }),
  },
  texto: {
    fontSize: 18,
    color: cores.textoPrincipal,
    fontWeight: '600',
  },
  botaoDelete: {
    backgroundColor: `${cores.perigo}20`, 
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoDelete: {
    color: cores.perigo,
    fontWeight: 'bold',
    fontSize: 18,
  }
});
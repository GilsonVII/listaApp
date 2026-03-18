import { useState } from 'react';
import { Produto } from '../models/Produto';
import { ProdutoBusiness } from '../business/ProdutoBusiness';

export const useProdutoViewModel = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const adicionarProduto = () => {
    try {
      setMensagemErro('');
      
      const novoProduto = ProdutoBusiness.validarENovoProduto(nomeDigitado, produtos);
      
      setProdutos((listaAntiga) => [...listaAntiga, novoProduto]);
      
      setNomeDigitado('');
    } catch (error: any) {
      setMensagemErro(error.message);
    }
  };

  const removerProduto = (idParaRemover: string) => {
    setProdutos((listaAtual) => 
      listaAtual.filter((produto) => produto.id !== idParaRemover)
    );
  };

  return {
    produtos,
    nomeDigitado,
    setNomeDigitado,
    mensagemErro,
    adicionarProduto,
    removerProduto,
  };
};
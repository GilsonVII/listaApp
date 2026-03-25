import { useState } from 'react';
import { Produto } from '../models/Produto';
import { ProdutoBusiness } from '../business/ProdutoBusiness';

export const useProdutoViewModel = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [descricaoDigitada, setDescricaoDigitada] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const adicionarProduto = () => {
    try {
      setMensagemErro('');
      const novoProduto = ProdutoBusiness.validarENovoProduto(nomeDigitado, descricaoDigitada, produtos);
      
      setProdutos((listaAntiga) => [...listaAntiga, novoProduto]);
      
      setNomeDigitado('');
      setDescricaoDigitada('');
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
    descricaoDigitada, 
    setDescricaoDigitada, 
    mensagemErro,
    adicionarProduto,
    removerProduto,
  };
};
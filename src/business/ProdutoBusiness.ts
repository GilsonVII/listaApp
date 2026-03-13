import { Produto } from '../models/Produto';

export const ProdutoBusiness = {
  validarENovoProduto: (nomeProduto: string, listaAtual: Produto[]): Produto => {
    const nomeFormatado = nomeProduto.trim();

    if (nomeFormatado.length <= 2) {
      throw new Error("O nome do produto deve ter mais de 2 caracteres.");
    }

    const jaExiste = listaAtual.some(
      (produto) => produto.nome.toLowerCase() === nomeFormatado.toLowerCase()
    );
    
    if (jaExiste) {
      throw new Error("Já existe um produto com esse nome na lista.");
    }

    return {
      id: Math.random().toString(36).substring(7),
      nome: nomeFormatado,
    };
  }
};
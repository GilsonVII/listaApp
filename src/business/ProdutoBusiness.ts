import { Produto } from '../models/Produto';

export const ProdutoBusiness = {
  validarENovoProduto: (nome: string, descricao: string, produtos: Produto[]): Produto => {
    if (nome.trim() === '') throw new Error('O NOME não pode estar vazio.');
    if (descricao.trim() === '') throw new Error('A DESCRIÇÃO não pode estar vazia.');

    const idHash = Math.random().toString(36).substring(2, 9);

    return {
      id: idHash,
      nome,
      descricao
    };
  }
};

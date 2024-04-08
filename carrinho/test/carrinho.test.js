import Carrinho from '../carrinho';
import Item from '../item';

describe('Teste do Carrinho', () => {
  it('Deve iniciar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
});
});
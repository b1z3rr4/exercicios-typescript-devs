type Product_2 = {
    id: number;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
  };
  
  // Utilizando o utilitário Omit para excluir a propriedade 'inStock'
  type ProductWithoutStock = Omit<Product_2, 'inStock'>;
  
  // Exemplo de uso:
  const productForClient: ProductWithoutStock = {
    id: 1,
    name: 'Laptop',
    description: 'High-end laptop',
    price: 999.99
  };
  
  // Tentativa de acessar a propriedade 'inStock' gerará um erro
  // console.log(productForClient.inStock); // Erro: 'inStock' não existe no tipo 'ProductWithoutStock'
  
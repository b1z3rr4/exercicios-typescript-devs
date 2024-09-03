type Product_1 = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

// Utilizando o utilitário Pick para selecionar apenas as propriedades desejadas
type ProductPreview = Pick<Product_1, 'id' | 'name' | 'price'>;

// Exemplo de uso:
const product: ProductPreview = { 
  id: 1, 
  name: 'Laptop', 
  price: 999.99 
};

// Tentativa de adicionar uma propriedade que não está em ProductPreview gerará um erro
// product.description = 'A high-end gaming laptop'; // Erro: 'description' não existe no tipo 'ProductPreview'

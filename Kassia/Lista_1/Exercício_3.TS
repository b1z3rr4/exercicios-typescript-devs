// Definição do tipo utilitário IntersectionOfKeys
type IntersectionOfKeys<T1, T2> = {
    [K in keyof T1 & keyof T2]: T1[K];
  };
  
  // Exemplo de uso com os tipos A e B
  type A_1 = {
    id: number;
    name: string;
    isActive: boolean;
  };
  
  type B_1 = {
    id: string;
    isActive: boolean;
    age: number;
  };
  
  // Aplicando IntersectionOfKeys aos tipos A e B
  type CommonKeys = IntersectionOfKeys<A_1, B_1>;
  
  // Teste: criando um objeto do tipo CommonKeys
  const commonObject: CommonKeys = {
    id: 123,           // `id` é uma chave comum, mas note que o tipo segue o de A (number)
    isActive: true     // `isActive` também é uma chave comum
  };
  
  console.log(commonObject);
  
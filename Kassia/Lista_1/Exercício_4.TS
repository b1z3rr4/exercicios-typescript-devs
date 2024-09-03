// Definição do tipo utilitário UnionOfCommonProps
type UnionOfCommonProps<T1, T2> = {
    [K in keyof T1 & keyof T2]: T1[K] | T2[K];
  };
  
  // Exemplo de uso com os tipos A e B
  type A_2 = {
    id: number;
    name: string;
    isActive: boolean;
  };
  
  type B_2 = {
    id: string;
    isActive: boolean;
    age: number;
  };
  
  // Aplicando UnionOfCommonProps aos tipos A e B
  type C = UnionOfCommonProps<A_2, B_2>;
  
  // Teste: criando um objeto do tipo C
  const objetoComum: C = {
    id: 123,          // `id` pode ser tanto string quanto number
    isActive: true    // `isActive` é booleano em ambos
  };
  
  console.log(objetoComum);
  
  
// Define o tipo genérico TransformType
type TransformType<T, From, To> = {
    [K in keyof T]: T[K] extends From ? To : T[K];
  };
  
  // Define o tipo User
  type User = {
    id: number;
    name: string;
    isActive: boolean;
    age: number;
    isVerified: boolean;
  };
  
  // Usa o tipo TransformType para criar um novo tipo TransformedUser
  type TransformedUser = TransformType<User, boolean, string>;
  
  // Exemplo de uso do tipo TransformedUser
  const user: TransformedUser = {
    id: 1,
    name: 'Alice',
    isActive: 'true', // Transformado de boolean para string
    age: 30,
    isVerified: 'false' // Transformado de boolean para string
  };
  
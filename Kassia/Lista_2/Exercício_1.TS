type User_1 = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  
  // Utilizando o utilitário Partial para tornar todas as propriedades opcionais
  type PartialUser = Partial<User_1>;
  
  // Exemplo de uso:
  const updateUser: PartialUser = { name: 'John Doe' }; // Apenas o nome será atualizado
  
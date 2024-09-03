type User_2 = {
    id: number;
    name?: string;
    email?: string;
    isActive?: boolean;
  };
  
  // Utilizando o utilitário Required para tornar todas as propriedades obrigatórias
  type RequiredUser = Required<User_2>;
  
  // Exemplo de uso:
  function validateUser(user: RequiredUser) {
    // Função de validação, onde todas as propriedades são obrigatórias
    console.log(`Validando usuário: ${user.name}, ${user.email}, status: ${user.isActive ? 'ativo' : 'inativo'}`);
  }
  
  // Esta chamada é válida porque todas as propriedades estão presentes
  validateUser({ id: 1, name: 'Alice', email: 'alice@example.com', isActive: true });
  
  // Esta chamada não seria válida porque faltam algumas propriedades obrigatórias
  // validateUser({ id: 1 }); // Erro de compilação
  
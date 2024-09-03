function getUser() {
    return { id: 1, name: 'Alice' };
  }
  
  // Utilizando o utilitário ReturnType para capturar o tipo de retorno da função getUser
  type UserReturnType = ReturnType<typeof getUser>;
  
  // Exemplo de uso:
  const user2: UserReturnType = getUser(); // válido
  
  // As propriedades de 'user' são tipadas corretamente conforme o retorno de 'getUser'
  console.log(user.id);   // 1
  console.log(user.name); // 'Alice'
  
  // Tentativa de atribuir um valor com tipo diferente gerará um erro
  // const invalidUser: UserReturnType = { id: 2, name: 123 }; // Erro: 'name' deve ser uma string
  
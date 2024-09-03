type Config = {
    apiUrl: string;
    port: number;
    secure: boolean;
  };
  
  // Utilizando o utilitário Readonly para tornar todas as propriedades imutáveis
  type ReadonlyConfig = Readonly<Config>;
  
  // Exemplo de uso:
  const config: ReadonlyConfig = {
    apiUrl: 'https://api.example.com',
    port: 443,
    secure: true,
  };
  
  // Tentativa de modificar uma propriedade gera um erro de compilação
  // config.apiUrl = 'https://api.changed.com'; // Erro: não é possível atribuir a 'apiUrl' porque é uma propriedade de leitura
  
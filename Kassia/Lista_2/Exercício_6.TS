// Utilizando o utilitário Record para mapear roles para permissões booleanas
type RolePermissions = Record<'admin' | 'user' | 'guest', boolean>;

// Exemplo de uso:
const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false,
};

// Tentativa de adicionar um role que não está no tipo gerará um erro
// permissions.superadmin = true; // Erro: 'superadmin' não existe no tipo 'RolePermissions'

### Lista de Exercícios de Utilitários de Tipos do TypeScript

#### Exercício 1: Transformando um Tipo em Parcial

**Cenário:**  
Você está desenvolvendo um formulário de atualização de perfil de usuário em um site. Nem todas as informações precisam ser atualizadas de uma vez; por isso, você precisa criar um tipo onde todas as propriedades sejam opcionais para que o usuário possa atualizar apenas os campos que deseja.

**Objetivo:**  
Utilize o utilitário `Partial` para criar um novo tipo `PartialUser` baseado no tipo `User`, onde todas as propriedades sejam opcionais.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// Exemplo de uso esperado:
// const updateUser: PartialUser = { name: 'John Doe' }; // apenas o nome será atualizado
```

---

#### Exercício 2: Tornando um Tipo Obrigatório

**Cenário:**  
Você está criando uma função de validação de dados do usuário no backend de uma aplicação. Os dados de entrada podem ter propriedades opcionais, mas a função de validação deve assegurar que todas as propriedades necessárias estejam presentes antes de continuar o processamento.

**Objetivo:**  
Utilize o utilitário `Required` para criar um tipo `RequiredUser` que force todas as propriedades a serem obrigatórias, mesmo que algumas sejam opcionais no tipo original.

```typescript
type User = {
  id: number;
  name?: string;
  email?: string;
  isActive?: boolean;
};

// Exemplo de uso esperado:
// function validateUser(user: RequiredUser) { /* ... */ }
// validateUser({ id: 1, name: 'Alice', email: 'alice@example.com', isActive: true }); // todas as propriedades são obrigatórias
```

---

#### Exercício 3: Criando um Tipo Somente de Leitura

**Cenário:**  
Você está trabalhando com um objeto de configuração que deve ser inicializado apenas uma vez e não pode ser alterado posteriormente no ciclo de vida da aplicação. Para garantir isso, todas as propriedades do objeto de configuração devem ser apenas para leitura.

**Objetivo:**  
Utilize o utilitário `Readonly` para criar um tipo `ReadonlyConfig` onde todas as propriedades sejam imutáveis.

```typescript
type Config = {
  apiUrl: string;
  port: number;
  secure: boolean;
};

// Exemplo de uso esperado:
// const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', port: 443, secure: true };
// config.apiUrl = 'https://api.changed.com'; // erro: não é possível atribuir a 'apiUrl' porque é uma propriedade de leitura
```

---

#### Exercício 4: Selecionando um Subconjunto de Propriedades

**Cenário:**  
Você está desenvolvendo uma página de listagem de produtos, onde só precisa de algumas informações para exibir no layout (como `id`, `name` e `price`), enquanto outras propriedades são desnecessárias. Para isso, é necessário criar um tipo que inclua apenas essas propriedades essenciais.

**Objetivo:**  
Utilize o utilitário `Pick` para criar um tipo `ProductPreview` que contenha apenas as propriedades `id`, `name` e `price` do tipo `Product`.

```typescript
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

// Exemplo de uso esperado:
// const product: ProductPreview = { id: 1, name: 'Laptop', price: 999.99 }; // apenas as propriedades essenciais
```

---

#### Exercício 5: Removendo um Subconjunto de Propriedades

**Cenário:**  
Você precisa criar uma versão de um tipo de produto que exclua certas propriedades confidenciais antes de enviar os dados para um cliente externo. Nesse caso, deseja remover a propriedade `inStock`, pois ela não deve ser compartilhada.

**Objetivo:**  
Utilize o utilitário `Omit` para criar um tipo `ProductWithoutStock` que exclua a propriedade `inStock` do tipo `Product`.

```typescript
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

// Exemplo de uso esperado:
// const productForClient: ProductWithoutStock = { id: 1, name: 'Laptop', description: 'High-end laptop', price: 999.99 }; // excluindo propriedade confidencial
```

---

#### Exercício 6: Mapeando Propriedades para Tipos Específicos

**Cenário:**  
Você está criando um sistema de permissões onde cada `role` (função) do sistema possui permissões específicas. Essas permissões são representadas por valores booleanos (`true` ou `false`). Em vez de criar manualmente um tipo para cada role, você deseja automatizar a criação do tipo de permissões.

**Objetivo:**  
Utilize o utilitário `Record` para criar um tipo `RolePermissions` que mapeie diferentes roles (`admin`, `user`, `guest`) para suas permissões (`boolean`).

```typescript
// Exemplo de uso esperado:
// const permissions: RolePermissions = { admin: true, user: false, guest: false };
```

---

#### Exercício 7: Excluindo Tipos de uma União

**Cenário:**  
Você possui um conjunto de roles de usuários e deseja criar um tipo que exclua a role `admin`, deixando apenas as roles comuns, como `editor` e `viewer`.

**Objetivo:**  
Utilize o utilitário `Exclude` para criar um tipo `NonAdminRoles` que exclua a role `admin` do tipo `UserRole`.

```typescript
type UserRole = 'admin' | 'editor' | 'viewer';

// Exemplo de uso esperado:
// const role: NonAdminRoles = 'editor'; // exclui a role 'admin'
```

---

#### Exercício 8: Extraindo Tipos de uma União

**Cenário:**  
Você possui um conjunto de roles de usuários, mas precisa de um tipo específico que capture apenas uma das roles, por exemplo, a role `editor`, para aplicar regras de negócio específicas.

**Objetivo:**  
Utilize o utilitário `Extract` para criar um tipo `EditorRole` que contenha apenas a role `editor` do tipo `UserRole`.

```typescript
type UserRole = 'admin' | 'editor' | 'viewer';

// Exemplo de uso esperado:
// const role: EditorRole = 'editor'; // extrai apenas a role 'editor'
```

---

#### Exercício 9: Removendo Tipos Nulos e Indefinidos

**Cenário:**  
Você está processando uma resposta de API que pode retornar valores `null` ou `undefined`. No entanto, para o processamento subsequente, você precisa garantir que apenas valores válidos (`string` ou `number`) sejam usados.

**Objetivo:**  
Utilize o utilitário `NonNullable` para criar um tipo `ValidResponse` que exclua `null` e `undefined` do tipo `Response`.

```typescript
type Response = string | number | null | undefined;

// Exemplo de uso esperado:
// const validResponse: ValidResponse = 'Success'; // apenas valores não nulos e não indefinidos
```

---

#### Exercício 10: Pegando o Tipo de Retorno de uma Função

**Cenário:**  
Você está criando uma biblioteca de funções de manipulação de usuários e precisa criar um tipo que represente o resultado de uma função de obtenção de usuário, para ser utilizado em outros pontos da aplicação.

**Objetivo:**  
Utilize o utilitário `ReturnType` para capturar o tipo de retorno da função `getUser` em um novo tipo `UserReturnType`.

```typescript
function getUser() {
  return { id: 1, name: 'Alice' };
}

// Exemplo de uso esperado:
// const user: UserReturnType = getUser(); // utiliza o tipo capturado pelo ReturnType
```

---

#### Exercício 11: Pegando o Tipo de Instância de uma Classe

**Cenário:**  
Você está criando uma função genérica que precisa receber uma instância de uma classe específica, como `Car`. No entanto, o tipo da instância deve ser inferido automaticamente.

**Objetivo:**  
Utilize o utilitário `InstanceType` para capturar o tipo de uma instância da classe `Car`.

```typescript
class Car {
  constructor(public make: string, public model: string) {}
}

// Exemplo de uso esperado:
// const carInstance: CarInstance = new Car('Toyota', 'Corolla'); // utiliza o tipo capturado pela InstanceType
```

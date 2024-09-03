// Exercício 1: Transformando um Tipo em Parcial

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// Torna tudo opcional.
type PartialUser = Partial<User>

const updateUser: PartialUser = { name: 'John Doe' }


// Exercício 2: Tornando um Tipo Obrigatório

type User2 = {
  id: number;
  name?: string;
  email?: string;
  isActive?: boolean;
};

// Torna tudo obrigatório.
type RequiredUser = Required<User2>

function validateUser(user: RequiredUser) { /* ... */ }
validateUser({ id: 1, name: 'Alice', email: 'alice@example.com', isActive: true })


// Exercício 3: Criando um Tipo Somente de Leitura

type Config = {
  apiUrl: string;
  port: number;
  secure: boolean;
};

// Configura para permitir somente leitura.
type ReadonlyConfig = Readonly<Config>

const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', port: 443, secure: true };


// Exercício 4: Selecionando um Subconjunto de Propriedades

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

// Define as chaves "id", "name", "price" como as únicas.
type ProductPreview = Pick<Product, "id" | "name" | "price" >

const product: ProductPreview = { id: 1, name: 'Laptop', price: 999.99 };
 

// Exercício 5: Removendo um Subconjunto de Propriedades

// Omite a propriedade "inStock"
type ProductWithoutStock = Omit<Product, "inStock">

const productForClient: ProductWithoutStock = { id: 1, name: 'Laptop', description: 'High-end laptop', price: 999.99 };


// Exercício 6: Mapeando Propriedades para Tipos Específicos

// Cria um tipo com as chaves definidas, tornando todas elas boolean.
type RolePermissions = Record<'admin' | 'user' | 'guest', boolean>;

const permissions: RolePermissions = { admin: true, user: false, guest: false };


// Exercício 7: Excluindo Tipos de uma União

type UserRole = 'admin' | 'editor' | 'viewer';

// Exclui "admin".
type NonAdminRoles = Exclude<UserRole, "admin">

const role: NonAdminRoles = 'editor';


// Exercício 8: Extraindo Tipos de uma União

// Extrai apenas a role "editor".
type EditorRole = Extract<UserRole, "editor">

const role2: EditorRole = 'editor';


// Exercício 9: Removendo Tipos Nulos e Indefinidos

type RResponse = string | number | null | undefined;

// Retira os valores falsos.
type ValidResponse = NonNullable<RResponse>

const validResponse: ValidResponse = 'Success';


// Exercício 10: Pegando o Tipo de Retorno de uma Função

function getUser() {
  return { id: 1, name: 'Alice' };
}

// returna o tipo de "getUser".
type UserReturnType = ReturnType<typeof getUser>;

const user: UserReturnType = getUser();


// Exercício 11: Pegando o Tipo de Instância de uma Classe

class Car {
  constructor(public make: string, public model: string) {}
}

// Captura o tipo da instância "Car".
type CarInstance = InstanceType<typeof Car>;

const carInstance: CarInstance = new Car('Toyota', 'Corolla');

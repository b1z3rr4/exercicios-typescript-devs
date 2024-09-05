//Exercício 1 - Transformando um Tipo em Parcial

type User_2 = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type PartialUser = Partial<User_2>;

const UpdateUser: PartialUser = {
  name: "John Doe",
};

//Exercício 2 - Tornando um Tipo Obrigatório

type User_3 = {
  id: number;
  name?: string;
  email?: string;
  isActive?: boolean;
};

type RequiredInfo = Required<User_3>;

//Exercício 3 - Criando um Tipo Somente de Leitura

type Config = {
  apiUrl: string;
  port: number;
  secure: boolean;
};

type ReadonlyConfig = Readonly<Config>;

//const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', port: 443, secure: true };

//Exercício 4 - Selecionando um Subconjunto de Propriedades

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

type ProductPreview = Pick<Product, "id" | "name" | "price">;

//Exercício 5 - Removendo um Subconjunto de Propriedades

type Product_1 = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

type ProductWithoutStock = Omit<Product_1, "instock">;
// const productForClient: ProductWithoutStock = { id: 1, name: 'Laptop', description: 'High-end laptop', price: 999.99 }; // excluindo propriedade confidencial

//Exercício 6 - Mapeando Propriedades para Tipos Específicos

type roles = "admin" | "user" | "guest";
type permission = boolean;

type RolePermissions = Record<roles, permission>;

const permissions: RolePermissions = { admin: true, user: false, guest: false };

//Exercício 7 - Excluindo Tipos de uma União

type UserRole = "admin" | "editor" | "viewer";

type NonAdminRoles = Exclude<UserRole, "admin">;

const role: NonAdminRoles = "editor";

//Exercício 8 - Extraindo Tipos de uma União

type UserRole_ = "admin" | "editor" | "viewer";

type EditorRole = Extract<"editor", UserRole_>;

const role_: EditorRole = "editor";

//Exercício 9 -  Removendo Tipos Nulos e Indefinidos

type Responses = string | number | null | undefined;

type ValidResponse = NonNullable<string | number | null | undefined>;

const validResponse: ValidResponse = "Sucess";

//Exercício 10 - Pegando o Tipo de Retorno de uma Função

function getUser() {
  return { id: 1, name: "Alice" };
}

type UserReturnType = ReturnType<typeof getUser>;

const user_: UserReturnType = getUser();

//Exercício 11 - Pegando o Tipo de Instância de uma Classe

class Car {
  constructor(public make: string, public model: string) {}
}

type CarInstance = InstanceType<typeof Car>;

const carInstance: CarInstance = new Car("Toyota", "Corolla");

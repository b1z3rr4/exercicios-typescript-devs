type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type PartialUser = Partial<User>;

const updateUser1: PartialUser = { name: 'John Doe' };

const updateUser2: PartialUser = {
  email: 'john.doe@example.com',
  isActive: true,
};

const updateUser3: PartialUser = {};

const updateUser4: PartialUser = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
};

// EXERCÍCIO 2
type User = {
  id: number;
  name?: string;
  email?: string;
  isActive?: boolean;
};

type RequiredUser = Required<User>;

function validateUser(user: RequiredUser) {
  console.log(
    `Validating user: ${user.name}, email: ${user.email}, is active: ${user.isActive}`
  );
}

validateUser({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  isActive: true,
});
validateUser({
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
});

// EXERCÍCIO 3
type Config = {
  apiUrl: string;
  port: number;
  secure: boolean;
};

type ReadonlyConfig = Readonly<Config>;

const config: ReadonlyConfig = {
  apiUrl: 'https://api.example.com',
  port: 443,
  secure: true,
};

config.apiUrl = 'https://api.changed.com';
config.port = 80;

// EXERCÍCIO 4
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;
const product: ProductPreview = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
};

const invalidProduct: ProductPreview = {
  id: 2,
  name: 'Smartphone',
};

// EXERCÍCIO 5
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

type ProductWithoutStock = Omit<Product, 'inStock'>;
const productForClient: ProductWithoutStock = {
  id: 1,
  name: 'Laptop',
  description: 'High-end laptop',
  price: 999.99,
};

const invalidProduct: ProductWithoutStock = {
  id: 2,
  name: 'Smartphone',
  description: 'Latest model',
  price: 599.99,
  inStock: true,
};
// EXERCÍCIO 6

type RolePermissions = Record<'admin' | 'user' | 'guest', boolean>;

const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false,
};

const invalidPermissions: RolePermissions = {
  admin: true,
  user: false,
  guest: 'no',
};

const invalidPermissions2: RolePermissions = {
  admin: true,
};

// EXERCÍCIO 7

type UserRole = 'admin' | 'editor' | 'viewer';

type NonAdminRoles = Exclude<UserRole, 'admin'>;

const role1: NonAdminRoles = 'editor';
const role2: NonAdminRoles = 'viewer';

const role3: NonAdminRoles = 'admin';

// EXERCÍCIO 8
type UserRole = 'admin' | 'editor' | 'viewer';

type EditorRole = Extract<UserRole, 'editor'>;

const role: EditorRole = 'editor';

const invalidRole: EditorRole = 'admin';

// EXERCÍCIO 9
type Response = string | number | null | undefined;

type ValidResponse = NonNullable<Response>;

const validResponse1: ValidResponse = 'Success';
const validResponse2: ValidResponse = 42;

const invalidResponse1: ValidResponse = null;
const invalidResponse2: ValidResponse = undefined;

// EXERCÍCIO 10
function getUser() {
  return { id: 1, name: 'Alice' };
}

type UserReturnType = ReturnType<typeof getUser>;

const user: UserReturnType = getUser();

const invalidUser: UserReturnType = { id: 2 };

// EXERCÍCIO 11
class Car {
  constructor(public make: string, public model: string) {}
}

type CarInstance = InstanceType<typeof Car>;

const carInstance: CarInstance = new Car('Toyota', 'Corolla');

const invalidCarInstance: CarInstance = { make: 'Honda' };

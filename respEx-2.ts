//EX 01
// type User = {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
//   };

//   type PartialUser = Partial<User>;


//   const upadteUser: PartialUser = {
//     name: 'John Doe'
//   }



//Ex 02
// type User = {
//     id: number;
//     name?: string;
//     email?: string;
//     isActive?: boolean;
//   };

//   type RequiredUser = Required<User>
// // Aqui eu copiei como no exepmlo mas n entendi muito bem a estrutura
//   function validateUser(user: RequiredUser){}

//   validateUser({ id: 1, name: 'Alice', email: 'alice@example.com', isActive: true })

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Ex 03
// type Config = {
//     apiUrl: string;
//     port: number;
//     secure: boolean;
//   };

// type ReadonlyConfig = Readonly<Config>

// const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', port: 443, secure: true };
// config.apiUrl = 'https://api.changed.com';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Ex 04
// type Product = {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     inStock: boolean;
//   };
  
// type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 05
// type Product = {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   inStock: boolean;
// };

// type ProductWithoutStock = Omit<Product, 'inStock'>
// const productForClient: ProductWithoutStock = { id: 1, name: 'Laptop', description: 'High-end laptop', price: 999.99 };

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 06
// type roles = 'admin' | 'user' | 'guest';
// type permission = boolean;

// type RolePermissions = Record<roles, permission>
// const permissions: RolePermissions = { admin: true, user: false, guest: false };
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 07
// type UserRole = 'admin' | 'editor' | 'viewer';
// type NonAdminRoles = Exclude<UserRole, 'admin'>
// const role: NonAdminRoles = 'editor';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 08
// type UserRole = 'admin' | 'editor' | 'viewer';
// type EditorRole = Extract<'editor', UserRole >
// const role: EditorRole = 'editor';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 09
// type Responses = string | number | null | undefined;
// type ValidResponse = NonNullable<string | number | null | undefined>
// const validResponse: ValidResponse = 'Success';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 10
// function getUser() {
//   return { id: 1, name: 'Alice' };
// }
// type UserReturnType = ReturnType<typeof getUser>
// const user: UserReturnType = getUser()
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Ex 11
//Essa aqui confesso que não entendi muito bem
// class Car {
//   constructor(public make: string, public model: string) {}
// }
// type CarInstance = InstanceType<typeof Car>
// const carInstance: CarInstance = new Car('Toyota', 'Corolla')
// const carInstances: Car = new Car('Toyota', 'Corolla')
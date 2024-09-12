// Para ver as respostas, digite no terminal git bash: ts-node lista2.ts   / Para rodar um arquivo contido numa pasta, digite: ./nomedapasta/nomedoarquivo.ts


namespace EXERCICIO_1_LISTA2 {
    
    // Exercício 1: Transformando um Tipo em Parcial
    
    type User = {
      id: number;
      name: string;
      email: string;
      isActive: boolean;
    };
    
    type PartialUser = Partial<User>;
    
    const updateUser: PartialUser = { name: 'Lorena' }; 
    
    console.log(updateUser);
}

namespace EXERCICIO_2_LISTA2 {
    
    // Exercício 2: Tornando um Tipo Obrigatório
    
    type User = {
        id: number;
        name?: string;
        email?: string;
        isActive?: boolean;
    };
    
    type RequiredUser = Required<User>;
    
    function validateUser(user: RequiredUser) { /* ... */
        console.log(user.id, user.name, user.email, user.isActive)
     }
    validateUser({ id: 1, name: 'Lorena', email: 'lorena@hotmail.com', isActive: true });
}

namespace EXERCICIO_3_LISTA2 {
    
    // Exercício 3: Criando um Tipo Somente de Leitura
    
    type Config = {
        apiUrl: string;
        port: number;
        secure: boolean;
    };
    
    type ReadonlyConfig = Readonly<Config>;
      
    // Exemplo de uso esperado:
    //const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', port: 443, secure: true };
    //config.apiUrl = 'https://api.changed.com'; // erro: não é possível atribuir a 'apiUrl' porque é uma propriedade de leitura
}

namespace EXERCICIO_4_LISTA2 {
    
    // Exercício 4: Selecionando um Subconjunto de Propriedades
    
    type Product = {
        id: number;
        name: string;
        description: string;
        price: number;
        inStock: boolean;
    };
      
    type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;
    const product: ProductPreview = { id: 1, name: 'Laptop', price: 999.99 };
    console.log(product);
}

namespace EXERCICIO_5_LISTA2 {
    
    // Exercício 5: Removendo um Subconjunto de Propriedades
    
    type Product = {
        id: number;
        name: string;
        description: string;
        price: number;
        inStock: boolean;
    };
    
    type ProductWithoutStock = Omit<Product, "inStock">
    const productForClient: ProductWithoutStock = { id: 1, name: 'Laptop', description: 'High-end laptop', price: 999.99 };
    console.log(productForClient);
}

namespace EXERCICIO_6_LISTA2 {
    // Exercício 6: Mapeando Propriedades para Tipos Específicos


    type RolePermissions = Record<'admin' | 'user'| 'guest', boolean>
    const permissions: RolePermissions = { admin: true, user: false, guest: false };
    console.log(permissions);
    // Isto define um tipo que mapeia cada um dos valores admin, user e guest para um valor booleano. Outra forma seria quebrar em tipos e puxar eles no record:
    // type Permissions = boolean;
    // type Role = 'admin' | 'user' | 'guest';
    // type RolePermissions = Record<Role, Permissions>;
}

namespace EXERCICIO_7_LISTA2 {
    // Exercício 7: Excluindo Tipos de uma União

    type UserRole = 'admin' | 'editor' | 'viewer';

    type NonAdminRoles = Exclude<UserRole, 'admin'>;

    const role: NonAdminRoles = 'editor'; // exclui a role 'admin'

    console.log(role);
}

namespace EXERCICIO_8_LISTA2 {
    // Exercício 8: Extraindo Tipos de uma União

    type UserRole = 'admin' | 'editor' | 'viewer';


    type EditorRole = Extract<UserRole, 'editor'>;

    const role: EditorRole = 'editor'; // extrai apenas a role 'editor'

    console.log(role);
}

namespace EXERCICIO_9_LISTA2 {
// Exercício 9: Removendo Tipos Nulos e Indefinidos


    type response = string | number | null | undefined;

    type ValidResponse = NonNullable<response>;

    const validResponse: ValidResponse = 'Success'; // apenas valores não nulos e não indefinidos

    console.log(validResponse);
}

namespace EXERCICIO_10_LISTA2 {
    // Exercício 10: Pegando o Tipo de Retorno de uma Função

    function getUser() {
        return { id: 1, name: 'Alice' };
    }
    
    type UserReturnType = ReturnType<typeof getUser>;


    const user: UserReturnType = getUser(); // utiliza o tipo capturado pelo ReturnType

    console.log(user);
}

namespace EXERCICIO_11_LISTA2 {
    // Exercício 11: Pegando o Tipo de Instância de uma Classe

    class Car {
        constructor(public make: string, public model: string) {}
    }

    type CarInstance = InstanceType<typeof Car>;

    const carInstance: CarInstance = new Car('Toyota', 'Corolla'); // utiliza o tipo capturado pela InstanceType
    
    console.log(carInstance);
    console.log(carInstance.make);
    console.log(carInstance.model);
}
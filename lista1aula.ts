namespace EXERCICIO_UM {

    // T é um generic type
    type TranformType<T, From, To> = {
        // desconhecido
        [K in keyof T]: T[K] extends From ? To : T[K];
    }

    type User = {
        id: number;
        age: number
        name: string;
        isActive: boolean;
        isVerified: boolean;
    }

    type UserReplaceNumberToString = TranformType<User, boolean, string>;

    function consoleMeuNome<T extends UserReplaceNumberToString>(user: T){
        console.log(user.name);
    }

    consoleMeuNome<UserReplaceNumberToString>({
        id: 1,
        age: 12,
        name: 'lorena',
        isActive: 'false',
        isVerified: 'true',
    });
}

namespace EXERCICIO_DOIS {
    const arrayOfKeys = ['laranja', 'maça', 'melão', 'banana'] as const;

    type TupleToUnionWithIndex<T extends readonly string[]> = T[number];

    type UnionOfKeys = TupleToUnionWithIndex<typeof arrayOfKeys>;
    // type UnionOfKeys = 'laranja' 'maça' 'melão' 'banana';

    const key: UnionOfKeys = 'maça'
}

namespace EXERCICIO_TRES {
    type IntersectionOfKeys<T1, T2> = {
        // Operadores bit a bit
        [K in keyof T1 & keyof T2]: T1[K] | T2[K];
    };
    // oq existe em A e B? id - isActive

    type A = {
        id: number;
        name: string;
        isActive: boolean;
    };

    type B = {
        id: string;
        isActive: boolean;
        age: number;
    };

    type IntersectionAB = IntersectionOfKeys<A, B>;
}

namespace EXERCICIO_QUATRO {
    type UnionOfCommonProps<T1, T2> = keyof T1 & keyof T2;

    type A = {
        id: number;
        name: string;
        isActive: boolean;
    };

    type B = {
        id: string;
        isActive: boolean;
        age: number;
    };

    type UnionAB = UnionOfCommonProps<A, B>;

    const key: UnionAB = "id";
}







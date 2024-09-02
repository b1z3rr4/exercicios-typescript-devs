// EX- 001
// type User = {
//     id: number;
//     name: string;
//     isActive: boolean;
//     age: number;
//     isVerified: boolean;
// }

// type TransformType<T, From, To> = {
//     //Vai iterar sobre cada key do Type T e verificar  se tem a o valor
//     [K in keyof T]: T[K] extends From ? To : T[K]
// }

// const transformedUser: TransformType<User, boolean, string> = {
//     id: 1,
//     name: 'Daniel',
//     isActive: 'true',
//     age: 23,
//     isVerified: 'false',
// }

// console.log(transformedUser);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Ex 02
// const meuArray = ['chave1','chave2', 'chave3'] as const;

// type TupleToUnionWithIndex<T extends readonly string[]> = T[number];
// type meuTipo = TupleToUnionWithIndex<typeof meuArray>;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


//Ex 03

// type IntersectionOfKeys<T1, T2> = Extract<keyof T1, keyof T2>                               
// type A = {
//     id: number;
//     name: string;
//     isActive: boolean;
//   };
  
//   type B = {
//     id: string;
//     isActive: boolean;
//     age: number;
//   };

// type result = IntersectionOfKeys<A, B>;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// EX 04 
// type UnionOfCommonProps<T1, T2> = {
//     [K in keyof T1 & keyof T2]: T1[K] extends infer D ? (K extends keyof T2 ? D | T2[K] : D) : never;
// }
// type UnionOfCommonProps<T1, T2> = {
//     [K in keyof T1 & keyof T2]: T1[K] | T2[K];
//   };
// type A = {
//     id: number;
//     name: string;
//     isActive: boolean;
//   };
  
//   type B = {
//     id: string;
//     isActive: boolean;
//     age: number;
//   };

// type C = UnionOfCommonProps<A, B>
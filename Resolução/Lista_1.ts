//Exercício 1 - Transformar Propriedades de um Tipo para Outro

type TransformType<T, From, To> = {
  [K in keyof T]: T[K] extends From ? To : T[K];
};

type User = {
  id: number;
  name: string;
  isActive: boolean;
  age: number;
  isVerified: boolean;
};

type TransformedUser = TransformType<User, boolean, string>;

const user: TransformedUser = {
  id: 4,
  name: "Yumi",
  isActive: "true",
  age: 26,
  isVerified: "false",
};

//Exercício 2 - Transformar um Array Constante em União de Strings

type TupleToUnionWithIndex<T extends readonly string[]> = T[number];

const meuArray = ["chave 1", "chave 2", "chave 3"] as const;

type MeuTipo = TupleToUnionWithIndex<typeof meuArray>;

//Exercício 3 - Interseção de Chaves entre Dois Tipos

type IntersectionOfKeys<T1, T2> = {
  [K in keyof T1 & keyof T2]: T1[K];
};

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

type result = IntersectionOfKeys<A, B>;

//Exercício 4 - União de Propriedades Comuns entre Dois Tipos

type UnionOfCommonProps<T1, T2> = {
  [K in keyof T1 & keyof T2]: T1[K] | T2[K];
};

type A_ = {
  id: number;
  name: string;
  isActive: boolean;
};

type B_ = {
  id: string;
  isActive: boolean;
  age: number;
};

type C = UnionOfCommonProps<A_, B_>;

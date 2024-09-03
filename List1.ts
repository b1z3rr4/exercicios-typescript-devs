// EXERCÍCIO 1
type User = {
  id: number;
  name: string;
  isActive: boolean;
  isAdmin: boolean;
};

type TransformBooleanToString<T> = {
  [K in keyof T]: T[K] extends boolean ? string : T[K];
};

type TransformedUser = TransformBooleanToString<User>;

const user: TransformedUser = {
  id: 1,
  name: 'Alice',
  isActive: 'true',
  isAdmin: 'false',
};

console.log(user);
// EXERCÍCIO 2
type TupleToUnionWithIndex<T extends readonly string[]> = T[number];

const meuArray = ['chave 1', 'chave 2', 'chave 3'] as const;

type MeuTipo = TupleToUnionWithIndex<typeof meuArray>;

const teste1: MeuTipo = 'chave 1';
const teste2: MeuTipo = 'chave 2';
const teste3: MeuTipo = 'chave 3';
// EXERCÍCIO 3
type IntersectionOfKeys<T1, T2> = keyof T1 & keyof T2;

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

type CommonKeys = IntersectionOfKeys<A, B>;

type Test = {
  [K in IntersectionOfKeys<A, B>]: A[K];
};

// EXERCÍCIO 4
type UnionOfCommonProps<T1, T2> = {
  [K in keyof T1 & keyof T2]: T1[K] | T2[K];
};

type Aa = {
  id: number;
  name: string;
  isActive: boolean;
};

type Bb = {
  id: string;
  isActive: boolean;
  age: number;
};

type Cc = UnionOfCommonProps<A, B>;

type Ccc = {
  id: string | number;
  isActive: boolean;
};
const example3: Cc = {
  id: 123,
  isActive: true,
};

const example2: Cc = {
  id: 'abc',
  isActive: false,
};

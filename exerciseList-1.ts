// Exercício 1: Transformar Propriedades de um Tipo para Outro

type TransformType<T, From, To> = {
  // Percorre as chaves de T e verifica se o valor corresponde a "From" para a substituição.
  [Key in keyof T]: T[Key] extends From ? To : T[Key]
}

type User = {
  id: number;
  name: string;
  isActive: boolean;
  age: number;
  isVerified: boolean;
};

type TransformedUser = TransformType<User, boolean, string>


// Exercício 2: Transformar um Array Constante em União de Strings

// Define os valores da lista de string como tipo.
type TupleToUnionWithIndex<T extends readonly string[]> = T[number]

const meuArray = ['chave 1', 'chave 2', 'chave 3'] as const;

type MeuTipo = TupleToUnionWithIndex<typeof meuArray>


// Exercício 3: Interseção de Chaves entre Dois Tipos

// Verifica se as chaves correspondem e as retornam.
type IntersectionOfKeys<T1, T2> = keyof T1 & keyof T2

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

type Intersection = IntersectionOfKeys<A, B>


// Exercício 4: União de Propriedades Comuns entre Dois Tipos

// Verifica se as chaves correspondem e as retornam com seus respectivos valores mesclados.
type UnionOfCommonProps<T1, T2> = {
  [Key in keyof T1 & keyof T2]: T1[Key] | T2[Key]
}

type C = UnionOfCommonProps<A, B>;

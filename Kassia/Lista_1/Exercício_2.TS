// Define o tipo utilitário TupleToUnionWithIndex
type TupleToUnionWithIndex<T extends readonly string[]> = T[number];

// Define o array constante
const meuArray = ['chave 1', 'chave 2', 'chave 3'] as const;

// Usa o tipo TupleToUnionWithIndex para criar um novo tipo MeuTipo
type MeuTipo = TupleToUnionWithIndex<typeof meuArray>;

// Exemplo de uso do tipo MeuTipo
const chave1: MeuTipo = 'chave 1'; // válido
const chave2: MeuTipo = 'chave 2'; // válido
const chave3: MeuTipo = 'chave 3'; // válido

// Tentativa de usar um valor não presente no array resultará em erro
// const invalido: MeuTipo = 'chave 4'; // Erro: 'chave 4' não é atribuível a tipo 'MeuTipo'

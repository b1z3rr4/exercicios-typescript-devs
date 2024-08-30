# Exercícios de Tipos Utilitários Avançados em TypeScript

## Exercício 1: Transformar Propriedades de um Tipo para Outro

### Objetivo

Crie um tipo utilitário genérico `TransformType` que transforma todas as propriedades de um tipo `T` que são de um tipo específico `From` para outro tipo `To`.

### Requisitos

1. Defina um tipo genérico `TransformType<T, From, To>` que percorre todas as propriedades de `T`.
2. Substitua todas as propriedades de `T` que sejam do tipo `From` pelo tipo `To`.

### Exemplo

Dado o tipo:

```typescript
type User = {
  id: number;
  name: string;
  isActive: boolean;
  age: number;
  isVerified: boolean;
};
```

Use o tipo `TransformType` para criar um novo tipo baseado em `User` onde todas as propriedades booleanas (`boolean`) sejam transformadas em strings (`string`).

O tipo resultante esperado é:

```typescript
type TransformedUser = {
  id: number;
  name: string;
  isActive: string;
  age: number;
  isVerified: string;
};
```

---

## Exercício 2: Transformar um Array Constante em União de Strings

### Objetivo

Crie um tipo utilitário `TupleToUnionWithIndex` que recebe um array constante e o transforma em um tipo de união de strings, onde cada elemento do array original se torna um tipo na união.

### Requisitos

1. Defina um tipo genérico `TupleToUnionWithIndex<T>` que recebe um array constante `T`.
2. Transforme cada elemento do array em um tipo de união de strings.

### Exemplo

Dado o array constante:

```typescript
const meuArray = ['chave 1', 'chave 2', 'chave 3'] as const;
```

Utilize o tipo `TupleToUnionWithIndex` para criar um novo tipo que seja uma união de todas as strings no array:

```typescript
type MeuTipo = TupleToUnionWithIndex<typeof meuArray>;
```

O tipo resultante esperado é:

```typescript
type MeuTipo = 'chave 1' | 'chave 2' | 'chave 3';
```

---

## Exercício 3: Interseção de Chaves entre Dois Tipos

### Objetivo

Crie um tipo utilitário `IntersectionOfKeys` que recebe dois tipos `T1` e `T2` e retorna um novo tipo contendo apenas as chaves que existem em ambos os tipos.

### Requisitos

1. Defina um tipo genérico `IntersectionOfKeys<T1, T2>` que recebe dois tipos `T1` e `T2`.
2. O tipo resultante deve incluir apenas as chaves que estão presentes tanto em `T1` quanto em `T2`.

### Exemplo

Dados os tipos:

```typescript
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
```

O tipo resultante esperado deve ser um novo tipo que contém apenas as chaves `id` e `isActive`, pois são as únicas que aparecem em ambos os tipos `A` e `B`.

---

## Exercício 4: União de Propriedades Comuns entre Dois Tipos

### Objetivo

Crie um tipo utilitário `UnionOfCommonProps` que receba dois tipos `T1` e `T2` e retorne um novo tipo contendo apenas as propriedades que existem em ambos os tipos, com o tipo de cada propriedade sendo a união dos tipos correspondentes.

### Requisitos

1. Defina um tipo genérico `UnionOfCommonProps<T1, T2>` que recebe dois tipos `T1` e `T2`.
2. O tipo resultante deve incluir apenas as propriedades que estão presentes tanto em `T1` quanto em `T2`, com o tipo de cada propriedade sendo a união (`|`) dos tipos correspondentes.

### Exemplo

Dados os tipos:

```typescript
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
```

O tipo resultante esperado é:

```typescript
type C = UnionOfCommonProps<A, B>;
```

Onde o tipo `C` deve ser:

```typescript
type C = {
  id: string | number;
  isActive: boolean;
};
```

---

### Dicas

- Utilize conceitos como mapeamento de tipos (`Mapped Types`), tipos condicionais (`Conditional Types`), e o operador `keyof`.
- Experimente usar utilitários nativos de TypeScript, como `typeof`, `extends`, e `infer`, para alcançar a solução desejada.

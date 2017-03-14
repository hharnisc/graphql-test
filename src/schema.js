import { buildSchema } from 'graphql';

let count = 0;

export const schema = buildSchema(`
  type Query {
    count: Int
  }

  type Mutation {
    increment: Int
    decrement: Int
    set(value: Int): Int
  }
`);

export const root = {
  count: () => count,
  increment: () => ++count,
  decrement: () => --count,
  set: ({ value }) => count = value,
};

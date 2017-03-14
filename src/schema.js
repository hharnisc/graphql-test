import { buildSchema } from 'graphql';

let count = 0;

export const schema = buildSchema(`
  type Query {
    count: Int
  }
`);

export const root = {
  count: () => count,
};

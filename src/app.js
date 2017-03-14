import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema, root} from './schema';

let app = express();
let port = 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`GraphQL Listening On ${port}`);
});

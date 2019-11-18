import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// const schema = foo;
// const resolvers = foo;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen(
  { port: 4000 },
  () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);

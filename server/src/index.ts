import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { GRAPHQL_SERVER_PORT, GRAPHQL_SERVER_PATH } from '../configs/config.server';

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
server.applyMiddleware({ app, path: `/${GRAPHQL_SERVER_PATH}` });

app.listen(
  { port: GRAPHQL_SERVER_PORT },
  () => console.log(`Server ready at http://localhost:${GRAPHQL_SERVER_PORT}${server.graphqlPath}`),
);

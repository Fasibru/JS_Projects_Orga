import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { GRAPHQL_SERVER_PORT, GRAPHQL_SERVER_PATH } from '../configs/config.server';
import typeDefs from './schema/index';
import resolvers from './resolvers/index';
import models from './models/index';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
  },
});

const app = express();
server.applyMiddleware({ app, path: `/${GRAPHQL_SERVER_PATH}` });

app.listen(
  { port: GRAPHQL_SERVER_PORT },
  () => console.log(`Server ready at http://localhost:${GRAPHQL_SERVER_PORT}${server.graphqlPath}`),
);

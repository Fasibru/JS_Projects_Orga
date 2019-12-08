import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Pages from './pages/index';

const cache = new InMemoryCache();
let link;
if (process.env.NODE_ENV === 'development') {
  link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });
}
if (process.env.NODE_ENV === 'production') {
  link = new HttpLink({
    uri: '/graphql',
  });
}

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root'),
);

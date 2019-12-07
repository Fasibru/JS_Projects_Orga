import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

client
  .query({
    query: gql`
      query Projects {
        projects {
          title
        }
      }
    `,
  })
  .then((result: unknown) => console.log(result));

ReactDOM.render(
  <div>
    Test
  </div>,
  document.getElementById('root'),
);

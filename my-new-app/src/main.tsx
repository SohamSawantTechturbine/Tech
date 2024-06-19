import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Your GraphQL server endpoint
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
   </ApolloProvider>
);

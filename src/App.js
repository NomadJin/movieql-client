import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;

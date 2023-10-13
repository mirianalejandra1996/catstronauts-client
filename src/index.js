import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const API_BASE_URL = process.env.REACT_APP_API_URL
const API_BASE_URL = "https://catstronauts-server-production-74bd.up.railway.app/"

const client = new ApolloClient({
  uri: API_BASE_URL, // change to YOUR own production server
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);

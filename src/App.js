import React from "react";
import UrlForm from "./components/UrlForm";
import ShortUrl from "./components/ShortUrl";
import DataTable from "./components/DataTable";
import { UrlShortenerProvider } from "./UrlShortenerContext";
import { Container } from "react-bootstrap"; // Import the Container component from React Bootstrap

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./App.css"; // custom CSS file to add more styles

const App = () => {
  return (
    <UrlShortenerProvider>
      <Container className="App">
        <h1 className="my-4">URL Shortener App</h1>
        <UrlForm />
        <ShortUrl />
        <DataTable />
      </Container>
    </UrlShortenerProvider>
  );
};

export default App;

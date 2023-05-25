import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main></main>
      </Router>
    </ChakraProvider>
  );
}

export default App;

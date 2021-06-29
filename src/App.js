import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BodyContainer } from "./styles";

function App() {
  return (
    <BodyContainer>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
      <Footer />
    </BodyContainer>
  );
}

export default App;

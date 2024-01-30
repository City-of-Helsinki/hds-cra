import React from "react";
import "./App.css";
import { LoadingSpinner, Card } from "hds-react";
import { Login } from "./Login";
import { Cookies } from "./Cookies";

function App() {
  return (
    <div className="App">
      <LoadingSpinner />
      <Card title="title" heading="heading" text="content text" border />
      <Cookies />
      <Login />
    </div>
  );
}

export default App;

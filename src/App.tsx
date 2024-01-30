import React from "react";
import "./App.css";
import { LoadingSpinner, Card } from "hds-react";

function App() {
  return (
    <div className="App">
      <LoadingSpinner />
      <Card title="title" heading="heading" text="content text" border />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import MyTree from "./MyTree";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyTree />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

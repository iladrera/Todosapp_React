import React from "react";
import ReactDOM from "react-dom";

import TodoAppContainer from "./pages/TodoApp/index_server";
// import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <div>
      <TodoAppContainer />
      {/* <Footer /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

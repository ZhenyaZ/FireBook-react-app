import React from "react";
import Products from "./Products/Products";

function Main(props) {
  return (
    <main className="main">
      <Products bookdata={props.bookdata} />
    </main>
  );
}

export default Main;

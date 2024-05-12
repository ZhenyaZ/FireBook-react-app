import React from "react";
import Card from "../../UI/Card/Card";
import "./Products.css";
function Products(props) {
  const bookdata = props.bookdata.books; //fetched books

  return (
    <section className="products">
      <div className="products__label">
        <h1>You may like this</h1>
      </div>
      <div className="products__list-products">
        {bookdata != undefined //If bookdata != undefined -> show books. else output in console -> error in parsing books
          ? bookdata.map((prod) => <Card bookdata={prod} />) 
          : console.log("error in parsing books")} 
      </div>
    </section>
  );
}

export default Products;

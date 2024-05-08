import React from "react";
import Card from "../../UI/Card/Card";
import "./Products.css";
function Products() {
  const bookdata = [
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
    {
      authors: "Navin sabrhawal",
      title: "Practical MongoDB",
      subtitle: "subtitle",
      image: "https://itbook.store/img/books/9781484206485.png",
    },
  ];

  return (
    <section className="products">
      <div className="products__label">
        <h1>You may like this</h1>
      </div>
      <div className="products__list-products">
        {/* <Card bookdata={bookdata} />
        <Card bookdata={bookdata} />
        <Card bookdata={bookdata} />
        <Card bookdata={bookdata} />
        <Card bookdata={bookdata} />
        <Card bookdata={bookdata} /> */}
        {bookdata.map((prod) => (
          <Card bookdata={prod} />
        ))}
      </div>
    </section>
  );
}

export default Products;

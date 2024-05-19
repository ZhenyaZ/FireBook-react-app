import React, { useState } from "react";
import "./Nav.css";
import Cart from "../../Cart/Cart";
export default function Nav(props) {
  const [isVisibleCart, setIsVisibleCart] = useState(false);

  const cartVisibleHandler = () => {
    setIsVisibleCart(!isVisibleCart);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>
            <a href="#">FIRE BOOKS</a>
          </span>
        </div>
        <span>
          <hr />
        </span>
        <div className="nav-btn">
          <ul>
            <li>
              <a onClick={props.searchVisibleHandler}>HOME</a>
            </li>
            <li>
              <a onClick={props.searchVisibleHandler}>SEARCH</a>
            </li>
            <li>
              <a onClick={cartVisibleHandler}>CART</a>
            </li>
          </ul>
        </div>
      </nav>
      {isVisibleCart ? (
        <Cart
          closeCart={cartVisibleHandler}
          cartBooksData={props.cartBooksData}
          totalAmount={props.totalAmount}
          setBooksCart={props.setBooksCart}
          setTotalAmount={props.setTotalAmount}
        />
      ) : (
        ""
      )}
    </>
  );
}

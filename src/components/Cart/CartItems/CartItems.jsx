import React  from "react";
import "./CartItems.css";
import CartFormBuy from "../CartFormBuy/CartFormBuy";
function CartItems(props) {
  return (
    <>
      <div className="cart-item__wrapper">
        <ul className="cart-item__list">
          {props.cartBooksData.map((books) => (
            <div className="element">
              <li>{books.title}</li>
              <li>{books.price}</li>
            </div>
          ))}
        </ul>

        <div className="cart-totalAmount">
          <p>total Amount: {Math.round(props.totalAmount)}$</p>
        </div>
      </div>
      <div className="">
        <CartFormBuy
          sendCartData={props.sendCartData}
          setBooksCart={props.setBooksCart}
          setTotalAmount={props.setTotalAmount}
        />
      </div>
    </>
  );
}

export default CartItems;

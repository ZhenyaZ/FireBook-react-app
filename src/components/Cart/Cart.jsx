import React from "react";
import CartItems from "./CartItems/CartItems";
import "./Cart.css";
import Modal from "./Modal";

function Cart(props) {
  const sendCartData = (personalInformation) => {
    fetch("https://firebook-5fb9f-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        order: {
          user: personalInformation,
          order: props.cartBooksData,
          total: props.totalAmount,
        },
      }),
    });
  };
  return (
    <>
      <div className="content-wrapper">
        <Modal>
          <button onClick={props.closeCart} id="closeButton">
            Close
          </button>
          <div className="cart-content">
            <CartItems
              cartBooksData={props.cartBooksData}
              totalAmount={props.totalAmount}
              sendCartData={sendCartData}
              setBooksCart={props.setBooksCart}
              setTotalAmount={props.setTotalAmount}
            />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Cart;

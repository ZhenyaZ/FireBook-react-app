import React, { useState } from "react";
import "./CartFormBuy.css";
function CartFormBuy(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [msg, setMsg] = useState(
    "Check if all fields have been entered correctly"
  );
  const validation =
    name === "" || lastName === "" || email === "" || tel === "";

  const personalInformation = {
    personalInformation: {
      name: name,
      lastName: lastName,
      email: email,
      tel: tel,
    },
  };
  const sendData = () => {
    if (validation) {
      setMsg("Check if all fields have been entered correctly");
    } else {
      setMsg(
        "Thank you for your order and a representative will be in touch shortly."
      );
      props.sendCartData(personalInformation);
      setName("");
      setLastName("");
      setEmail("");
      setTel("");
      props.setBooksCart([
        {
          title: "Items",
        },
      ]);
      props.setTotalAmount(0);
    }
  };
  return (
    <div>
      <form onClick={(e) => e.preventDefault()}>
        <div className="form-input">
          <div className="name">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(val) => {
                setName(val.target.value);
              }}
            />
          </div>
          <div className="lastName">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(val) => {
                setLastName(val.target.value);
              }}
            />
          </div>
          <div className="email">
            <label htmlFor="">email</label>
            <input
              type="email"
              value={email}
              onChange={(val) => {
                setEmail(val.target.value);
              }}
            />
          </div>
          <div className="tel">
            <label htmlFor="">tel</label>
            <input
              type="tel"
              value={tel}
              onChange={(val) => {
                setTel(val.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-controllers">
          <button onClick={sendData}>buy</button>
        </div>
        {<h3>{msg}</h3>}
      </form>
    </div>
  );
}

export default CartFormBuy;

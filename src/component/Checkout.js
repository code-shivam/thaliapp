import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCart,
  incerementCart,
  RemoveItem,
} from "../redux/counterSlice";
import Footer from "./Footer";
import "./style.css";

const Cart = () => {
  const thalicart = useSelector((state) => state.counter.thali);

  const [error, setError] = useState("");
  const despatch = useDispatch();

  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  const uniqueIds = [];
  const unique = thalicart.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });

  const increas = (item) => {
    despatch(incerementCart(item));
  };
  const dicrement = (item) => {
    despatch(decrementCart(item));
  };

  let sum = 0;
  for (const item of thalicart) {
    sum += Number(item.price);
  }
  const order = () => {
    if (thalicart.length < 2) {
      setError("please select atleast two item");
    } else {
      setError("Your order is placed go to console  to see your amount ");
      console.log(`total order of  ${sum}is placed enjoy your thali`);
    }
  };

  return (
    <div style={{ backgroundColor: "#0e0628", height: "100vh" }}>
      <div>
        <h1 style={{ color: "#a49ebc" }}>
          <marquee>ORDER NOW</marquee>
        </h1>

        {unique?.map((ele, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={ele.image}
                style={{ height: "120px", width: "200px" }}
              />
              <div style={{ marginLeft: "50px", color: "#a49ebc" }}>
                <h2> Item : {ele.name}</h2>
                <h2> Price : ₹ {ele.price}</h2>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button onClick={() => increas(ele)}>+</button>{" "}
              <p style={{ color: "#fff" }}>
                {thalicart.filter((item) => item.id === ele.id).length}
              </p>
              <button onClick={() => dicrement(ele)}>-</button>
            </div>

            <button onClick={() => Remove(ele.id)}>Remove-Item</button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#a49ebc" }}>Total item :{thalicart.length}</p>
        <p style={{ color: "#a49ebc" }}>Total Amount : {sum}</p>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={order}>Order Now </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

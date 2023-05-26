import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTothali, decrementCart } from "../redux/counterSlice";
import Footer from "./Footer";

function Thali() {
  const productData = useSelector((state) => state.counter.products);
  const thalicart = useSelector((state) => state.counter.thali);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addTothali(item));
  };
  const decrement = (item) => {
    dispatch(decrementCart(item));
  };

  return (
    <div>
      <h1 style={{ color: "#a49ebc", margin: "0px" }}>
        <marquee>MAKE YOUR THALI NOW</marquee>
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          textAlign: "center",

          placeItems: " center",
        }}
      >
        {productData.map((ele, i) => (
          <div
            key={i}
            style={{
              borderRadius: "20px",
              height: "350px",
              margin: "10px",
              width: "80%",
              backgroundColor: "#1c1535",
            }}
          >
            <img
              src={ele.image}
              style={{
                border: "none",
                borderTopRightRadius: "30px",
                borderTopLeftRadius: "30px",
              }}
              height="40%"
              width="100%"
            />
            <p style={{ color: "#fff" }}>
              {" "}
              <b>{ele.name}</b>
            </p>
            <p style={{ color: "#a49ebc" }}> {ele.description}</p>
            <p>
              {" "}
              <b>₹ {ele.price}</b>
            </p>
            <button
              onClick={() => addToCart(ele)}
              style={{
                backgroundColor: "#3772ff",
                border: "none",
                borderRadius: "10px",
                padding: "15px",
                color: "#fff",
              }}
            >
              ADD TO CART
            </button>
            <button onClick={() => addToCart(ele)}>+</button>

            <button
              style={{
                color: "red",
                marginLeft: "5px",
                backgroundColor: "ButtonShadow",
              }}
            >
              {" "}
              {thalicart.filter((item) => item.id === ele.id).length}
            </button>
            <button onClick={() => decrement(ele)}>-</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Thali;

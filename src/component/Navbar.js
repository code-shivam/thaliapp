import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const thalicart = useSelector((state) => state.counter.thali);
  let sum = 0;
  for (const item of thalicart) {
    sum += Number(item.price);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",alignItems:"center"
      }}
    >
      <h1 style={{ color: "#a49ebc" }}>Thali building app </h1>
      <div
        style={{
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        <p style={{position:"relative",right:"50px"}}>
        <Link to="/">
          {" "}
          HOME
        </Link>{" "}
        </p>
        <p style={{ color:"red",fontSize:"10px"}}>
          {thalicart.length} 
        </p>
        <p>
        <Link to="/cart"> 
         Cart
        </Link>{" "}
        </p>
        
       
      </div>
    </div>
  );
}

export default Navbar;

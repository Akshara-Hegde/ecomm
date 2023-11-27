import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCartItems, removeItem } from "../feature/cart/CartSlice";

const Cart = () => {
  const products = useSelector(getAllProducts)
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
 let totalPrice=0
  if(cartItems.length>0){
    
    totalPrice = cartItems.reduce((sum,item)=>{
      console.log(Number(item.price)+" "+item.title)
      return sum = sum + Number(item.price)
    },0)
  }

  function handleRemove(item){
    console.log(item.id);
    dispatch(removeItem(item))
  }
  return (
    <div className="cartMain" 
    // style={{ margin: "15% 0 0 0" }}
    >
      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              background: "lavender",
              mixBlendMode: "darken",
              height: "15%",
              border: "3px solid lavender",
              borderRadius: "5%",
              padding: "4%",
              margin: "2% 15% 2% 15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "50%" }}>
              <img style={{ width: "80%" }} src={item.image} alt="image"></img>
            </div>
            <div>
              <div>
                <h3>{item.title}</h3>
                <h3>Price: Rs.{Math.round(item.price * 80)}</h3>
              </div>
              <div>
                <button
                  style={{
                    border: "1px solid plum",
                    background: "plum",
                  }}
                  className="btn"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "1%" }}>
        <h3>Total Amount: {Math.round(totalPrice * 80)}</h3>
      </div>
      <div>
        <button
          style={{
            border: "1px solid plum",
            background: "plum",
            margin:"5%",
            width:"30%"

          }}
          className="btn"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

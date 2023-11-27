import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, getAllProducts } from "../feature/cart/CartSlice";
import { useAuth0 } from "@auth0/auth0-react";


const ProductDetails = () => {
  const {loginWithRedirect} = useAuth0();
  const {isAuthenticated} = useAuth0()
  let { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(getAllProducts);
  let prod = products.filter((p) => {
    return p.id === Number(id);
  });
  function handleClick() {
    {
      isAuthenticated ? dispatch(addItem(prod[0])) : loginWithRedirect();
    }
  }
  console.log(prod);
  return (
    <div
      className="details"
      // style={{ marginTop: "8%" }}
    >
      <div
        className="detailsCard"
        // style={{
        //   padding: "0 4%",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
        // style={{
        //   padding: "0 4%",
        //   display: "grid",
        //   gridTemplateColumns: "repeat(2,50%)",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <div
          style={{
            border: "3px solid lavenderblush",
            width: "100%",
            height: "100%",
          }}
        >
          <img style={{ width: "75%" }} src={prod[0].image}></img>
        </div>
        <div style={{ padding: "5%" }}>
          <h1>{prod[0].title}</h1>
          <h4 style={{ fontWeight: "200" }}>{prod[0].description}</h4>

          <h1>Price: Rs.{Math.round(prod[0].price * 80)}</h1>

          <button
            style={{
              border: "1px solid plum",
              background: "salmon",
              margin: "5%",
              width: "50%",
            }}
            className="btn"
            onClick={handleClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

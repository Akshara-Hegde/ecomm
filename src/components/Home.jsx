import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchedProducts } from "../feature/cart/CartSlice";
import ProductsList from "./ProductsList";

const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedProducts())
  }, []);
  return (
    <div
      style={{
        padding: "10% 5% 2% 5%",
        // display: "grid",
        // gridGap: "3%",
        // gridTemplateColumns: "repeat(4,23%",
      }}
      className="homeCard"
    >
      <ProductsList />
      {/* {products ? (
        products.map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                border: "1px solid black",
                borderRadius: "5%",
                padding: "3%",
                boxShadow: "10px 5px 25px grey",
             
              }}
            >
              <div style={{ height: "75%", width: "90%" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={prod.image}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding:"10% 0"
                }}
              >
                <div>{prod.title}</div>

                <div>Rating: {prod.rating.rate}</div>
                <div>Price: {prod.price}</div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>...Loading</h1>
      )} */}
    </div>
  );
};

export default Home;

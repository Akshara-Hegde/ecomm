import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../feature/cart/CartSlice";
import ProductCard from "./ProductCard";
import { Carousel } from "react-bootstrap";
import "../App.css";

const ProductsList = () => {
  const products = useSelector(getAllProducts);
  const menscloth = products.filter((item) => {
    return item.category == `men's clothing`;
  });
  const womenscloth = products.filter((item) => {
    return item.category == `women's clothing`;
  });
  const jewelery = products.filter((item) => {
    return item.category == `jewelery`;
  });
  const electronics = products.filter((item) => {
    return item.category == `electronics`;
  });
  console.log();
  console.log(womenscloth);

  return (
    <>
      {menscloth ? (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="carousel"
              src="https://images.pexels.com/photos/5790432/pexels-photo-5790432.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="cloth"
            />
            <Carousel.Caption>
              <h3>Fastrack</h3>
              <p>25% off</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="carousel"
              src="https://images.pexels.com/photos/9978991/pexels-photo-9978991.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="cloth"
            />
            <Carousel.Caption>
              <h3>Rolex</h3>
              <p>15% off</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel"
              src="https://images.pexels.com/photos/9978966/pexels-photo-9978966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="cloth"
            />
            <Carousel.Caption >
              <h3>Sonata</h3>
              <p>10% off </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}

      <h1 style={{ fontWeight: "700", padding: "4%" }}>Men's clothing</h1>
      {menscloth ? (
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(4,20vw)",
          //   gridGap: "1% 3%",
          //   gridTemplateRows: "100%",
          // }}
          className="cards"
        >
          {menscloth.map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      <div>
        <h1 style={{ fontWeight: "700", padding: "4%" }}>Women's clothing</h1>
      </div>
      {womenscloth ? (
        <div className="cards1">
          {womenscloth.map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      <div>
        <h1 style={{ fontWeight: "700", padding: "5%" }}>Electronics</h1>
      </div>
      {electronics ? (
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(4,20vw)",
          //   gridGap: "1% 3%",
          //   gridTemplateRows: "50%",
          // }}
          className="cards2"
        >
          {electronics.map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      <div>
        <h1 style={{ fontWeight: "700", padding: "4%" }}>Jewelery</h1>
      </div>
      {jewelery ? (
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(4,20vw)",
          //   gridGap: "1% 3%",
          //   gridTemplateRows: "80%",
          // }}
          className="cards"
        >
          {jewelery.map((item) => (
            <ProductCard key={item.id} prod={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
};

export default ProductsList;

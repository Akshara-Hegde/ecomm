import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { prod } = props;
  return (
    <div className="mainCard" >
      <Link style={{textDecoration:"none",}} to={`/details/${prod.id}`}>
        <div
          style={{
            border: "1px solid lavender",
            // background: "lavender",
            background:"indianred",
            borderRadius: "5%",
            padding: "3%",
            height: "100%",
            boxShadow: "10px 5px 25px grey",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "65%",
              width: "100%",
              overflow:"hidden"
            }}
          >
            <img
              style={{ maxHeight: "100%", maxWidth: "80%",display:"block" }}
              src={prod.image}
              alt="product image"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10% 0",
              color:"black"
            }}
          >
            <div>
              {prod.title.length > 20 ? (
                <div>{prod.title.slice(0, 15)}</div>
              ) : (
                <div>{prod.title}</div>
              )}
            </div>

            <div>Rating: {prod.rating.rate}</div>
            <div>Price: Rs.{Math.round(prod.price * 80)}</div>
          </div>
        </div>
      </Link>
    </div>
    // <Card style={{ width: "100%",background:"lavender" }}>
    //   <div style={{display:"grid",gridTemplateRows:"repeat(2,50%)",alignItems:"center",justifyContent:"center"}}>
    //     <Card.Img
    //       variant="top"
    //       style={{display:"flex",alignItems:"center", justifyContent:"center", maxHeight: "100%", maxWidth: "50%", display: "block" }}
    //       src={prod.image}
    //     />
    //     <Card.Body style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           padding: "10% 0",
    //         }}>
    //       <div>
    //         {" "}
    //         {prod.title.length > 20 ? (
    //           <div>{prod.title.slice(0, 15)}..</div>
    //         ) : (
    //           <div>{prod.title}</div>
    //         )}
    //       </div>
    //       <div>Rating: {prod.rating.rate}</div>
    //       <div>Rs.{prod.price}</div>

    //     </Card.Body>
    //   </div>
    // </Card>
  );
};

export default ProductCard;

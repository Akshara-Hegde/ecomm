import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const Header = () => {
  const { logout, isAuthenticated } = useAuth0();

  const { loginWithRedirect } = useAuth0();
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",

          backgroundColor: "lightcoral",

          justifyContent: "space-between",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "100",
        }}
      >
        <FitbitIcon style={{ height: "10vh", width: "10vw" }} />
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 style={{ color: "black" }}>Flpkart</h1>
        </Link>
        <div style={{ padding: "0 3%" }}>
          {isAuthenticated ? (
            <Link to="/cart">
              <ShoppingCartIcon
                style={{ height: "7vh", width: "5vw", color: "black" }}
              />
            </Link>
          ) : (
            <ShoppingCartIcon
              onClick={() => loginWithRedirect()}
              style={{ height: "7vh", width: "5vw", color: "black" }}
            />
          )}

          {isAuthenticated ? (
            <LogoutIcon
              style={{ height: "7vh", width: "5vw" }}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            />
          ) : (
            <LoginIcon
              style={{ height: "7vh", width: "5vw" }}
              onClick={() => loginWithRedirect()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

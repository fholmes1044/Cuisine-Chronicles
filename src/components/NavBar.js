import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "180px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div id="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
     
      <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Reviews
      </NavLink>
      <NavLink
        to="/reviews/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        NewReviewForm
      </NavLink>
      <NavLink
        to="/reviews/favorite"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        FavoriteRestaurants
      </NavLink>
      
    </div>
  );
}

export default NavBar;
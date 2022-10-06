import React from "react";
import globe from "../globe.png";

function Navbar() {
  return (
    <nav>
      <img className="logo" src={globe} alt="Globe Illustration" />
      <p className="logo-title">my travel journal.</p>
    </nav>
  );
}

export default Navbar;

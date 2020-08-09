import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://picsum.photos/400/250?random=1"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://picsum.photos/200/100?random=2"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;

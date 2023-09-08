import React from "react";
const Time = new Date();
const Year = Time.getFullYear();
const Footer = () => {
  return (
    <footer>
      <p>
        Tony Kalalian <br />
        &copy;{Year},All right are reserved
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={"120px"} />
          <span className="secondaryText">
            our viion is to make all peolpe <br />
            the best place to live for them
          </span>
        </div>

        <div className="flexColStart f-right"></div>
        <span className="pimaryText">Information </span>
        <span className="secondayText ">145 new york fl 4571 usa </span>
        <div className="flexCenter f-menu">
          <span>proparty</span>
          <span>service</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import ImgInfo from "../images/mahmoud-2.jpg";

const Info = () => {
  return (
    <div className="info">
      <img src={ImgInfo} alt="my-photo" className="img-info" />
      <h2 className="info-name">Mahmoud Mostafa</h2>
      <p className="info-job">Frontend Developer</p>
      <p>mahmoudmostafa.website</p>
      <div className="info-website-box">
        <a
          href="mailto: melshahat799"
          className="info-website email"
          target="_blank"
        >
          <ion-icon className="info-icon-website" name="mail"></ion-icon>
          <p>Email</p>
        </a>

        <a
          href="https://www.linkedin.com/in/mahmoud-mustafa-7417b51b1"
          className="info-website linkedin"
          target="_blank"
        >
          <ion-icon
            className="info-icon-website"
            name="logo-linkedin"
          ></ion-icon>
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Info;

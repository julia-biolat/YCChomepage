import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://z-p4.www.instagram.com/yonsei_computer_club/?hl=ko");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/YCC-GitHub");
  };
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />

      <div className="f-content">
        <span>yonseicomputerclub@gmail.com</span>
        <div className="f-icons">
          <Insta
            color="white"
            size={"3rem"}
            onClick={handleInstagramClick}
            style={{ cursor: "pointer" }}
          />
          <Gitub
            color="white"
            size={"3rem"}
            onClick={handleGitHubClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const handleLogin = () => {
    window.location.href =
      "https://www.notion.so/ee0f1353872542f4b19fb52e6eb1663f?pvs=4";
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">YCC</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                홈
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                활동소개
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                후원사
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                프로젝트
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button" style={{ marginRight: "3rem" }}>
            Contact
          </button>
        </Link>
        <button
          className="button n-button"
          style={{
            background: "transparent",
            border: "2px solid var(--orange)",
            borderRadius: "0",
            color: "var(--orange)",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

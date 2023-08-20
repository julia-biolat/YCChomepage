import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Ycc from "../../img/ycc1.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleInstagramClick = () => {
    window.open("https://z-p4.www.instagram.com/yonsei_computer_club/?hl=ko");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/YCC-GitHub");
  };

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "", fontSize: "1.5rem" }}>
            연세대학교 중앙 컴퓨터 동아리
          </span>
          <span>Yonsei Computer Club</span>
          <span style={{ fontSize: "14px" }}>
            Yonsei Computer Club (YCC)는 1970년에 창립된 연세대학교 유일무이
            중앙컴퓨터동아리입니다. 컴퓨터라는 공통의 관심사를 가진 학생들이
            부원으로 활동하고 있으며, 유구한 역사를 가진 만큼 다양한 활동을
            지원하고 있습니다.
          </span>
        </div>
        <a href="https://forms.gle/38EGh7EYA4baYfhPA">
          <button className="button i-button">지원하기</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <img
            src={require("../../img/github.png").default}
            alt=""
            onClick={handleGitHubClick}
            style={{ cursor: "pointer" }}
          />
          <img
            src={require("../../img/instagram.png").default}
            alt=""
            onClick={handleInstagramClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img
          src={Ycc}
          alt=""
          style={{
            width: "270px",
            height: "auto",
            top: "150px",
            left: "200px",
          }}
        />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="최고의" text2="코딩 동아리" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="미래가" text2="준비된 인재들" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import Modal from "react-modal";

Modal.setAppElement("#root"); // For accessibility purposes

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uedweib",
        "template_ecx31vb",
        form.current,
        "hbRr7xXmUUO0Fzvdo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); // 폼 초기화
          setModalIsOpen(true); // 모달 열기
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>YCC</span>
          <span>Contact</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="이름"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="자신의 이메일"
          />
          <textarea name="message" className="user" placeholder="내용" />
          <input type="submit" value="보내기" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "black",
            maxWidth: "300px",
            margin: "auto",
            maxHeight: "200px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <h2>메일이 전송 완료되었습니다.</h2>
        <p>감사합니다.</p>
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            backgroundColor: "skyblue", // This will change the button color to skyblue
            border: "none",
            padding: "10px 20px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          닫기
        </button>
      </Modal>
    </div>
  );
};

export default Contact;

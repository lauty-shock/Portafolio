import { useRef } from "react";

import { FaBars as Bars } from "react-icons/fa";
import { AiOutlineCloseCircle as Close } from "react-icons/ai";

import style from "./Navbar.module.css";

const Navbar = () => {
  const listNavbar = useRef();

  const handleBtnOpenMenu = () => {
    listNavbar.current.style.left = "0";
  };

  const handleBtnCloseMenu = () => {
    listNavbar.current.style.left = "-600px";
  };

  const handleBtnNavbarClick = (e, value) => {
    e.preventDefault();
    handleBtnCloseMenu();
    const element = document.getElementById(value || e.target.value);
    const heigth = element.clientHeight / 12;
    const scrollTo = element.offsetTop - heigth;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <nav className={style.navbar}>
      <button onClick={(e) => handleBtnNavbarClick(e, "home")}>
        <p className={style.brandLogo}>Shock</p>
      </button>
      <button title="Menu" onClick={handleBtnOpenMenu} className={style.bars}>
        <Bars color="#fff" size="1.5em" />
      </button>
      <ul ref={listNavbar} className={style.listNavbar}>
        <li>
          <button
            onClick={(e) => handleBtnNavbarClick(e)}
            className={`home ${style.btnNavbar} ${style.active}`}
            value="home"
          ></button>
        </li>
        <li>
          <button
            onClick={(e) => handleBtnNavbarClick(e)}
            className={`about ${style.btnNavbar}`}
            value="about"
          ></button>
        </li>
        <li>
          <button
            onClick={(e) => handleBtnNavbarClick(e)}
            className={`portfolio ${style.btnNavbar}`}
            value="portfolio"
          ></button>
        </li>
        <li>
          <button
            onClick={(e) => handleBtnNavbarClick(e)}
            className={`contact ${style.btnNavbar}`}
            value="contact"
          ></button>
        </li>
        <li>
          <button onClick={handleBtnCloseMenu} className={style.close}>
            <Close color="#C42B1C" size="3em" />
          </button>
        </li>
      </ul>
      <div className={style.flagsContainer}>
        <button
          onClick={() => {
            window.localStorage.setItem("language", "en");
          }}
        >
          <img
            className={style.flagImg}
            src="https://flagcdn.com/us.svg"
            alt="English"
          />
        </button>
        <button
          onClick={() => {
            window.localStorage.setItem("language", "es");
          }}
        >
          <img
            className={style.flagImg}
            src="https://flagcdn.com/es.svg"
            alt="Spanish"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

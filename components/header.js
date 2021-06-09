import { useState } from "react";
import Link from "next/link";
import styles from "./styles/header.module.css";

//import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

function Header() {
  const [isClicked, setClick] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <h1 id={styles.logo}>Friskytool</h1>

      <div
        id={styles.dropdownLines}
        className={isClicked ? styles.changeIcon : ""}
        onClick={handleClick}
      >
        <div id={styles.line1}></div>
        <div id={styles.line2}></div>
        <div id={styles.line3}></div>
      </div>
      <div
        id={styles.listContainer}
        className={isClicked ? styles.changeList : ""}
      >
        <ul
          id={styles.headerList}
          className={isClicked ? styles.changeList : ""}
        >
          <li>
            <button onClick={() => (window.location.href = "/api/login")}>
              Login
            </button>
          </li>
          <li>
            <button onClick={() => (window.location.href = "/profile")}>
              Profile
            </button>
          </li>
          <li>
            <button onClick={() => (window.location.href = "/api/logout")}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  function handleClick() {
    if (isClicked) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
}

export default Header;

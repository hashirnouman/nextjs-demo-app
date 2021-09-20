import React from "react";
import style from "./css/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
      <Link href="/">
      <a>Home</a>
      </Link>
      </div>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/users">
        <a>users</a>
      </Link>
    </div>
  );
};

export default Navbar;

import React from "react";
import style from "./css/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
      hello
      </div>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export default Navbar;

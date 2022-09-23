import React from "react";
import Link from "next/link";
import style from "./NavBar.module.css";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <div className={`navbar bg-base-100 ${style.header}`}>
      <div className="flex-1">
        <Link href="/">
          <a className="p-3 text-xl normal-case menuitems hover:border-none">
            daisyUI
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-4 p-0 px-3">
          <li>
            <Link href="/">
              <a className={`menuitems ${router.pathname == "/" ? "active" : ""}`}>Design</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={`menuitems ${router.pathname == "/about" ? "active" : ""}`}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={`menuitems ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import HeaderDrawer from "./HeaderDrawer";
import "../css/Header.css";

export default function Header() {
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  useEffect(() => {}, [
    (window.onresize = () => {
      setWindowSize(window.outerWidth);
    }),
  ]);
  return (
    <div className="header">
      {windowSize >= 768 ? (
        <>
          <div className="header-pages-ref">
            <img src={"/assets/icons/logo.svg"} alt="logo" />
            <a className="ref" href="#">
              Features
            </a>
            <a className="ref" href="#">
              Pricing
            </a>
            <a className="ref" href="#">
              Resources
            </a>
          </div>
          <div className="header-btns">
            <Button variant="text">Login</Button>
            <Button variant="text">Sign Up</Button>
          </div>
        </>
      ) : (
        <>
          <div className="header-pages-ref">
            <img src={"/assets/icons/logo.svg"} alt="logo" />
          </div>
          <div className="header-btns">
            <HeaderDrawer />
          </div>
        </>
      )}
    </div>
  );
}

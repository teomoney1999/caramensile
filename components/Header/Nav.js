import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Box from "../UI/Box";
import { BsCartCheckFill, BsSearch } from "react-icons/bs";

const Nav = ({ className }) => {
  return (
    <div className="header__nav">
      <div className="header__nav__logo">
        <Image src="/img/logo_caramen.jpeg" width={100} height={80} />
      </div>
      <div className="header__nav__element">
        <div className="header__nav__element__item">
          {["Home", "About", "Products"].map((ele) => (
            <div className="header__nav__element__item--1">{ele}</div>
          ))}
        </div>
        <BsCartCheckFill className="header__nav__element__item" />
        <BsSearch className="header__nav__element__item" />
      </div>
    </div>
  );
};

export default Nav;

import Image from "next/image";
import navData from "../../data/nav-data";
import { BsCartCheckFill, BsSearch } from "react-icons/bs";

const Nav = ({ className }) => {
  return (
    <div className="header__nav">
      <div className="header__nav__logo">
        <Image src="/img/logo_caramen.jpeg" width={100} height={80} />
      </div>
      <div className="header__nav__element">
        <div className="header__nav__element__item">
          {navData.map((ele) => (
            <div className="header__nav__element__item--1" key={ele.name}>
              {ele.name}
            </div>
          ))}
        </div>
        <BsCartCheckFill className="header__nav__element__item" />
        <BsSearch className="header__nav__element__item" />
      </div>
    </div>
  );
};

export default Nav;

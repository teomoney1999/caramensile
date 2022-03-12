import { Container } from "react-bootstrap";
import Image from "next/image";
import Widget from "./UI/Widget";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
const Footer = ({ className }) => {
  return (
    <Container className="footer">
      <div className="footer__logo">
        {/* <div className="footer__logo__image"> */}
        <Image src="/img/logo_caramen.jpeg" width={100} height={80} />
        {/* </div> */}
        <div className="footer__logo__description">
          Find a perfect ingredient for a website perfection with Cafe WordPress
          theme! This delicious WordPress theme, made for every café restaurant
          or bar, is packed with an amazing set of layouts and elements. Create
          an original restaurant presentation or allow your visitors to book a
          table easily with integrated plugins.
        </div>
        <div className="footer__logo__location">
          <Widget>
            <BsFillTelephoneFill className="fs-2" />
            {"(0243) 8333 898"}
          </Widget>
          <Widget>
            <HiLocationMarker className="fs-2" />
            {"Nguyen Khang, Yen Hoa, Cau Giay, Ha Noi"}
          </Widget>
        </div>
      </div>
      <div className="footer__author">
        <div className="footer__author__name">
          © 2022 Teomoney (Quoc Anh Truong)
        </div>
        <div className="footer__author__social-media">
          <FaFacebookF className="" />
          <AiOutlineInstagram className="" />
          <SiGmail className="" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;

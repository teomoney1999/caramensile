import { Row, Col, Container } from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Box from "../UI/Box";
import Widget from "../UI/Widget";

const Contact = ({ className }) => {
  return (
    <div className="header__row">
      <div className="space-between">
        <div className="header__row__contact">
          <Widget>
            <BsFillTelephoneFill className="fs-4 primary-color" />
            {"(0243) 8333 898"}
          </Widget>
          <Widget>
            <HiLocationMarker className="fs-4 primary-color" />
            {"Nguyen Khang, Yen Hoa, Cau Giay, Ha Noi"}
          </Widget>
        </div>
        <div className="header__row__social_media">
          <a href="https://www.facebook.com/caramenngonre/" target="_blank">
            <FaFacebookF className="fs-4 primary-color" />
          </a>
          <a href="https://www.facebook.com/caramenngonre/" target="_blank">
            <AiOutlineInstagram className="fs-4 primary-color" />
          </a>
          <a href="https://www.facebook.com/caramenngonre/" target="_blank">
            <SiGmail className="fs-4 primary-color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

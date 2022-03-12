import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { IoIosRestaurant } from "react-icons/io";
const Order = ({ className }) => {
  return (
    // <Container className="order" fluid>
    <div className="order">
      <Image src="/img/creme-caramen-dish.jpg" width={1600} height={700} />
      <div className="order__card">
        <div className="order__card__image">
          <IoIosRestaurant />
        </div>
        <div className="order__card__title">Make Your Own Breakfast</div>
        <div className="order__card__description">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </div>
        <button className="order__card__btn">Đặt hàng ngay</button>
      </div>
    </div>
  );
};

export default Order;

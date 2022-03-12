import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCoffee } from "react-icons/ai";
import { RiCake3Line } from "react-icons/ri";
import { GiPieSlice, GiCoffeePot } from "react-icons/gi";
import featureData from "./feature-data";

const Feature = ({ className }) => {
  return (
    // <section className="wrapper">
    <Container className="feature">
      <div className="feature__title">{featureData.title}</div>
      <Row>
        <Col></Col>
        <Col md="6" className="feature__description">
          {featureData.description}
        </Col>
        <Col></Col>
      </Row>

      <Row className="feature__card">
        {featureData.features.map((feature) => (
          <Col className="feature__card__items">
            <div className="feature__card__img">{feature.image}</div>
            <div className="feature__card__title">{feature.title}</div>
            <div className="feature__card__text">{feature.description}</div>
          </Col>
        ))}
      </Row>
    </Container>
    // </section>
  );
};

export default Feature;

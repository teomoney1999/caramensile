import { Container, Row, Col } from "react-bootstrap";
import featureData from "../../data/feature-data";

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
          <Col className="feature__card__items" key={feature.title}>
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

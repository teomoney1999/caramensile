import { Container, Row, Col } from "react-bootstrap";
import menu from "../../data/menu-data";
import MenuItem from "./menu-item";

const Menu = ({ className }) => {
  const firstCol = menu.slice(0, menu.length / 2);
  const secondCol = menu.slice(menu.length / 2, menu.length);
  return (
    <Container className="menu">
      <h1 className="menu__title">Thực Đơn Hiện Có</h1>
      <div className="menu__description">
        Đảm bảo giao cho bạn sản phẩm mới nhất. Hạn sử dụng cho mỗi loại sản
        phẩm là 10 ngày
      </div>
      <Row className="menu__items">
        <Col md={6}>
          {firstCol.map((menu) => (
            <MenuItem item={menu} />
          ))}
        </Col>
        <Col md={6}>
          {secondCol.map((menu) => (
            <MenuItem item={menu} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;

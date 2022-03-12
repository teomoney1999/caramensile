import { Container, Row, Col } from "react-bootstrap";
import menu from "./menu-data";
import { CgUnavailable } from "react-icons/cg";
import MenuItem from "./menu-item";

const Menu = ({ className }) => {
  const firstCol = menu.slice(0, 2);
  const secondCol = menu.slice(2, menu.length);
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
            // <div className="menu__items__card">
            //   <div className="menu__items__card__upper">
            //     <div className="menu__items__card__upper__name">
            //       {menu.name}{" "}
            //       {menu.preOrder ? (
            //         <span className="menu__items__card__upper__preorder">
            //           (Cần đặt trước {menu.preOrderDay} ngày)
            //         </span>
            //       ) : (
            //         ""
            //       )}
            //     </div>
            //     <div className="menu__items__card__upper__price">
            //       {menu.price}
            //     </div>
            //   </div>
            //   <div className="menu__items__card__seperator">
            //     .........................................................
            //   </div>
            //   <div className="menu__items__card__description">
            //     {menu.description}
            //   </div>
            //   {menu.isAvailable && (
            //     <div className="menu__items__card__not-available">
            //       Hiện chưa có hàng
            //     </div>
            //   )}
            // </div>
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

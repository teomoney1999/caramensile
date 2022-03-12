const MenuItem = ({ className, item }) => {
  return (
    <div className="menu__items__card">
      <div className="menu__items__card__upper">
        <div className="menu__items__card__upper__name">
          {item.name}{" "}
          {item.preOrder ? (
            <span className="menu__items__card__upper__preorder">
              (Cần đặt trước {item.preOrderDay} ngày)
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="menu__items__card__upper__price">{item.price}</div>
      </div>
      <div className="menu__items__card__seperator">
        .........................................................
      </div>
      <div className="menu__items__card__description">{item.description}</div>
      {!item.isAvailable && (
        <div className="menu__items__card__not-available">
          Hiện chưa có hàng
        </div>
      )}
    </div>
  );
};

export default MenuItem;

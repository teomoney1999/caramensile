const Widget = ({ className, icon, info, children }) => {
  return (
    <div className="widget">
      {/* <div className="widget__img">{icon}</div>
      <div className="widget__info">{info}</div> */}
      {children}
    </div>
  );
};

export default Widget;

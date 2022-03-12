
const VerticalCard = ({ className, icon, children }) => {
  return (
    <div className={`${className} card__vertical`}>
      {icon}
      {children}
    </div>
  );
};
export default VerticalCard;

const Link = ({ className, href, target, rel, children }) => {
  return (
    <a href={href} target={target || "_blank"} rel={rel || "noopener"}>
      {children}
    </a>
  );
};

export default Link;

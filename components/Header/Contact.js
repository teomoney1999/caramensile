import Widget from "../UI/Widget";
import Link from "../UI/Link";
import socialMediaData from "../../data/social-media-data";
import addressData from "../../data/address-data";

const Contact = ({ className }) => {
  return (
    <div className="header__row">
      <div className="space-between">
        <div className="header__row__contact">
          {addressData.map((address) => (
            <Widget key={address.content}>
              {address.icon}
              {address.content}
            </Widget>
          ))}
        </div>
        <div className="header__row__social_media">
          {socialMediaData.map((socialMedia) => (
            <Link key={socialMedia.name}>{socialMedia.icon}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

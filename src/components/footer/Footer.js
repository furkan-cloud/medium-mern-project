import MediumFooter from "../icons/MediumFooter";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left_container">
        <MediumFooter />
      </div>
      <div className="footer_right_container">
        <p>About</p>
        <p>Help</p>
        <p>Legal</p>
      </div>
    </div>
  );
};

export default Footer;

import ContactCard from "./ContactCard/ContactCard";
import Style from "./ContactLocation.module.css";
import phone from "../../../../public/img/phone.png";
import locatin from "../../../../public/img/352521_location_on_icon.png";
import message from "../../../../public/img/letter.png";

const ContactLocation = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Style.connect__heading}>Get In Touch</h2>

        <div className={Style.connect__container}>
          <ContactCard title={"01732555555"} image={phone} />
          <ContactCard title={"North Badda, Dhaka, Bangladesh"} image={locatin} />
          <ContactCard title={"contact@halaljibika.com"} image={message} />
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;

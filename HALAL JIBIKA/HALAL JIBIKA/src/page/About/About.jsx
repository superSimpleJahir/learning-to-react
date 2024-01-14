/* eslint-disable react/no-unescaped-entities */
import style from "./a.module.css";
const About = () => {
  return (
    <section className={style.aboutSection}>
      <div className={`container`}>
        <h1 className={style.headertext}>About Us</h1>
        <div className={style.aboutFlex}>
          <div className={style.aboutText}>
            <h4>About Us</h4>
            <h1>
              Why <span>35,000+</span> People Trust On Jobcy?
            </h1>
            <p>
              Start working with Jobcy that can provide everything you need to generate awareness,
              drive traffic, connect. Dummy text is text that is used in the publishing industry or
              by web designers to occupy the space which will later be filled with 'real' content.
            </p>
            <ul className={style.listItme}>
              <li>
                <span>✓</span> Digital Marketing Solutions
              </li>
              <li>
                <span>✓</span> Our Talented & Experienced Marketing Agency
              </li>
              <li>
                <span>✓</span> Creative Design
              </li>
              <li>
                <span>✓</span> New jobs Innovation
              </li>
            </ul>
          </div>

          <div className={style.aboutImage}>
            <img src="./img/img-01.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import style from "./Heaser.module.css";

const Header = () => {
  return (
    <section className={style.h_wrapper}>
      <div className={`innerWidth flexCenter paddings ${style.h_container}`}>
        <img src="../../../public/logo.png" alt="logo" width={100} />

        <ul className={`flexCenter ${style.h_menu}`}>
          <li>
            <a href="">Residencies</a>
          </li>
          <li>
            <a href="">Our Value</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Get Started</a>
          </li>
          <button className={`${style.h_button} button`}>
            <a href="">Contact</a>
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Header;

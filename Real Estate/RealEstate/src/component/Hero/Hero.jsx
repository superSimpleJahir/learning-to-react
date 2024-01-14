import CountUp from "react-countup";
import style from "./Hero.module.css";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className={`${style.hero_Wrapper}`}>
      <div className={`paddings innerWidth flexCenter ${style.hero_container}`}>
        {/* hero left  */}
        <div className={`flexColStart ${style.hero_left}`}>
          <div className={style.hero_title}>
            <div className={style.orange_circle} />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className={`flexColStart ${style.hero_dis}`}>
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <form className={style.search_bar}>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" name="" id="" />
            <button className={`button`}>Search</button>
          </form>

          <div className={`flexCenter ${style.stats}`}>
            <div className={`flexColStart ${style.stat}`}>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span>Premium Product</span>
            </div>

            <div className={`flexColStart ${style.stat}`}>
              <span>
                <CountUp start={1800} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Custome</span>
            </div>

            <div className={`flexColStart ${style.stat}`}>
              <span>
                <CountUp start={0} end={28} duration={4} />
                <span>+</span>
              </span>
              <span>Awards Winning</span>
            </div>
          </div>
        </div>

        {/* hero right  */}
        <div className={`${style.hero_right} flexCenter`}>
          <div className={`${style.img_Container}`}>
            <img src="../../../public/hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

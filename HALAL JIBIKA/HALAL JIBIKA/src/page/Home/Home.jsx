import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { categoryData } from "../../utlity/categoryData";
import style from "../../style/Home.module.css";
import JobCategories from "../../component/JobCategories";
import Job from "../../component/Job";
import styles from "../../style/Jobs.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  const fratchData = async (url) => {
    const data = (await axios.get(url)).data;
    setData(data);
  };

  useEffect(() => {
    // fratchData("http://localhost:9000/jobs");
    fratchData("./Jobs.json");
  }, []);
  const latestData = data.reverse().slice(0,6)

  return (
    <>
      <header className={`${style.bg}`}>
        <section className={`${style.innerHeader} container`}>
          <div className={`${style.hero} flex`}>
            <div className={style.heroText}>
              <h1>
                Keep <span>hardworking</span> <br /> take patients and make yourself <br /> always
                ready for jobs
              </h1>
              <p>
                We curate the best digital jobs for those who are looking to start their career in
                designing.
              </p>
              <NavLink to="/login" className={style.heroBtn}>
                Explore
              </NavLink>
            </div>
            <div className={style.herologo}>
              <img src="./img/image .png" alt="" />
            </div>
          </div>
        </section>
      </header>

      <section className={`container`}>
        <div className={style.innercategory}>
          <h1>
            Explore job by <span>Category</span>
          </h1>
          <div className={style.categorySection}>
            {categoryData.map((data) => (
              <JobCategories key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.jobSection} container`}>
        <h1>Latest <span>Jobs</span></h1>
        <div className={styles.innrejobs}>
          {data && latestData.map((jobData) => <Job key={jobData.id} jobData={jobData} />)}
        </div>

        <div className={style.jobsBtn}>
          <NavLink to='/jobs'>Explore All Jobs</NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;

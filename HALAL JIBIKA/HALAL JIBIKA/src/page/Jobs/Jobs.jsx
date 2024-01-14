import { useEffect, useState } from "react";
import style from "../../style/Jobs.module.css";
import axios from "axios";
import Job from "../../component/Job";

const Jobs = () => {
  const [data, setData] = useState([]);

  const fratchData = async (url) => {
    const data = (await axios.get(url)).data;
    setData(data);
  };

  useEffect(() => {
    // fratchData("http://localhost:9000/jobs");
    fratchData("./Jobs.json");
  }, []);

  return (
    <section className={`${style.jobSection} container`}>
      <h1>All Jobs</h1>
      <div className={style.innrejobs}>
        {data && data.map((jobData) => <Job key={jobData.id} jobData={jobData} />)}
      </div>
    </section>
  );
};

export default Jobs;

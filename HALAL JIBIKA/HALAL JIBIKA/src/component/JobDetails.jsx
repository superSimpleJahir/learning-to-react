import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import style from "../style/JobDetails.module.css";
const JobDetails = () => {
  const detailsJob = useLoaderData();
  const { id } = useParams();
  const idNum = parseInt(id);
  const jobs = detailsJob.find((job) => job.id === idNum);

  const { logo, location, way, title, salary, position, description } = jobs;
  const { overview, details, requirements } = description;
  const { responsibilities } = details;
  const { heading, content } = requirements;

  return (
    <section className={`${style.detailsJob} container`}>
      <div className={`${style.detailsHeader}`}>
        <h1>
          Job Details <br /> Apply your <br /> Dream Jobs
        </h1>
        <img src="./img/resume assessment.svg" alt="jobHeroLogo" />
      </div>

      <div className="">
        <div className="">
          <div className="">
            <img src={logo} alt="logo" />
            <h2>{title}</h2>
            <p>{way}</p>
            <p>{position}</p>
            <p>{salary}</p>
            <p>
              <IoLocationOutline /> {location}
            </p>
          </div>

          <div className="">
            <h3>Description:-</h3>
            <h4>{overview}</h4>
          </div>
          <div className="">
            <h3>Job Responsibilities & Context:-</h3>
            <p>{responsibilities}</p>
          </div>

          <div className="">
            <h3>Requirements:-</h3>
            <p>{heading}</p>
            <p>{content}</p>
          </div>
          <Link to="/jobs">See All Jobs</Link>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default JobDetails;

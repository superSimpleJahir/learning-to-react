/* eslint-disable react/prop-types */
import style from '../style/Home.module.css'
const JobCategories = ({ data }) => {
  const { title, image, jobNums } = data;
  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h4>{jobNums} Jobs</h4>
    </div>
  );
};

export default JobCategories;

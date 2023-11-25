/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Country({ country }) {
  const languge = country.languages;
  const currenci = country.currencies;
  // console.log(languge);

  const langugeArr = [];
  const currenciArr = [];

  for (const key in languge) {
    langugeArr.push(languge[key]);
  }

  for (const key in currenci) {
    for (const value in currenci[key]) {
      currenciArr.push(currenci[key][value]);
    }
  }




  return (
    <div
      style={{
        border: "1px solid #2d2d2d",
        marginBottom: "5px",
      }}
    >
      <img style={{
        maxWidth: '200px'
      }} src={country.flags.png} alt="" />
      <img style={{
        maxWidth: '200px'
      }} src={country.coatOfArms.png} alt="" />
      <h4>lang: {langugeArr.join(", ")}</h4>
      <h4>currenci: {currenciArr.join(",")}</h4>
    </div>
  );
}

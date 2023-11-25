import { useEffect, useState } from "react";
import Country from "../../component/Country/Country";


export default function AllCuntries() {
  const [cuntries, setCuntries] = useState([]);
  const cuntriURL = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(cuntriURL)
      .then((res) => res.json())
      .then((data) => setCuntries(data));
  }, []);
  // console.log(cuntries);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `1fr 1fr 1fr`,
      gap : '20px',
      
    }}>
      {cuntries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
}

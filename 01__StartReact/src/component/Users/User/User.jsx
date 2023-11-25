
// eslint-disable-next-line react/prop-types
export default function User( {user: {name, age, height,imgURL}}) {

  return (
    <div>
      <img src={imgURL} alt="Image" />
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  )
}

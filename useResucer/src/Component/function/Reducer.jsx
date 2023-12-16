const Reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      return state + 1;
    case "dicrement":
      return state - 1;

    default:
      break;
  }
};
export default Reducer;

for(let i=0; i--<=100; i++){
  console.log(i);
}
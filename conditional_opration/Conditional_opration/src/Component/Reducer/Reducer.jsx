
const Reducer = (state, action) => {
  const {type, a} = action

  switch (type) {
    case 'increagr':
      return{
        ...state,
        coounter : state.coounter + a
      }
  
    default:
      break;
  }
  
};

export default Reducer;
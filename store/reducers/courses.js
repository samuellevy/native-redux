// initial state
const INITIAL_STATE = {
  data: ['react native', 'react js'],
};

//reducers
function courses(state = INITIAL_STATE, action) {
  switch (action) {
    case 'ADD_COURSE':
      return {...state, data: [...state.data, action.title]};
    default:
      return state;
  }
}

export default courses;

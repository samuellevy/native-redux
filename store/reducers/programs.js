const INITIAL_STATE = {
  data: ['vs code', 'sublime'],
};

function programs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PROGRAM':
      return {...state, data: [...state.data, action.title]};
    default:
      return state;
  }
}

export default programs;

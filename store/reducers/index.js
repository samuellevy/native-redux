import {combineReducers} from 'redux';

import courses from './courses';
import programs from './programs';

export default combineReducers({
  courses,
  programs,
});

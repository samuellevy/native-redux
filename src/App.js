import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {Provider} from 'react-redux';
import store from '../store';
import CourseList from './components/CourseList';
import ProgramList from './components/ProgramList';

const App = () => {
  return (
    <Provider store={store}>
      <CourseList />
      {/* <ProgramList /> */}
    </Provider>
  );
};

export default App;

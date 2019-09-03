import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import * as CourseActions from '../../../store/actions/courses';

export default function ProgramList() {
  const courses = useSelector(state => state.courses.data); //== state=>{return state.data;}
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(CourseActions.addCourse());
  }

  return (
    <View>
      {courses.map((item, key) => (
        <Text key={key}>{item}</Text>
      ))}
      <TouchableOpacity onPress={addCourse}>
        <Text>Novo</Text>
      </TouchableOpacity>
    </View>
  );
}

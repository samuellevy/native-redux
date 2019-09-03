import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

// import { Container } from './styles';

export default function ProgramList() {
  const courses = useSelector(state => state.courses.data); //== state=>{return state.data;}
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({type: 'ADD_COURSE', title: 'GraphQL'});
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

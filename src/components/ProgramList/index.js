import React from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

// import { Container } from './styles';

export default function ProgramList() {
  const courses = useSelector(state => state.courses.data); //== state=>{return state.data;}
  return (
    <View>
      {courses.map((item, key) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
}

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import * as ProgramActions from '../../../store/actions/programs';

export default function ProgramList() {
  const programs = useSelector(state => state.programs.data); //== state=>{return state.data;}
  const dispatch = useDispatch();

  function addProgram() {
    dispatch(ProgramActions.addProgram());
  }

  return (
    <View>
      {programs.map((item, key) => (
        <Text key={key}>{item}</Text>
      ))}
      <TouchableOpacity onPress={addProgram}>
        <Text>Novo</Text>
      </TouchableOpacity>
    </View>
  );
}

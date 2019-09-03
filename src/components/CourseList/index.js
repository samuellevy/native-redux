import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import * as CoursesActions from '../../../store/actions/courses';

class CourseList extends Component {
  handleAddCourse(dispatch) {
    dispatch(CoursesActions.addCourse());
  }

  render() {
    const {data, dispatch} = this.props;

    return (
      <View>
        {data.map((item, key) => (
          <Text key={key}>{item}</Text>
        ))}
        <TouchableOpacity onPress={() => this.handleAddCourse(dispatch)}>
          <Text>Novo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => ({
  data: state.courses.data,
}))(CourseList);

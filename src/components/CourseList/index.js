import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {connect} from 'react-redux';

// import { Container } from './styles';

class CourseList extends Component {
  render() {
    const {data} = this.props;
    return (
      <View>
        {data.map((item, key) => (
          <Text key={key}>{item}</Text>
        ))}
      </View>
    );
  }
}

export default connect(state => ({
  data: state.data,
}))(CourseList);

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Text>Teste</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

import React, { Component } from 'react';
import { View } from 'react-native';

import IndexScreens from './components/screens/IndexScreens';

export default class App extends Component {

  render() {  
    return (
      <View style={{flex: 1}}>
        <IndexScreens />
      </View>
    );
  }
}

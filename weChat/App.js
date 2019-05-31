/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { RootNavigator } from './src/router/index'
var Dimensions = require('Dimensions');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootNavigator/>
  };
  getArr() {
    let data = [
        {name: '苹果'},
        {name: '西瓜'},
        {name: '甜瓜'}
    ]
      let rt = []
      for (let i=0; i<data.length;i++) {
        rt.push(
            <Text key={i}>{data[i].name}</Text>
        )
      }
      return rt
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    input: {
        width: 190,
        height: 30,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    }
});

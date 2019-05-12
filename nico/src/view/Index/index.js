import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImgList from '../../component/imgList'

export default class Bananas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.indexWrap}>
        <ImgList></ImgList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indexWrap: {
    marginBottom: 50
  },
  img: {
    width: 193,
    height: 110
  }
});
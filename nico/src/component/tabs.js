import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native'
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class Tabs extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: '0'
    }
  }
  changeTabs(msg) {
    this.setState({
      activeIndex: msg
    })
  }
  render() {
    return (
      // <Container style={styles.tabsWrap}>
      <View style={styles.tabsWrap}>
        <Footer>
          <FooterTab>
            <Button vertical onPress={()=>{this.changeTabs('0')}} style={this.state.activeIndex === '0'? styles.active: ''}>
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={()=>{this.changeTabs('1')}} style={this.state.activeIndex === '1'? styles.active: ''}>
              <Text>Camera1</Text>
            </Button>
            <Button vertical onPress={()=>{this.changeTabs('2')}} style={this.state.activeIndex === '2'? styles.active: ''}>
              <Text>Navigate</Text>
            </Button>
           </FooterTab>
         </Footer>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsWrap: {
    width: 375
  },
  active: {
    color: 'blue',
    backgroundColor: 'red'
  }
});
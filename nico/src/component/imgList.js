import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Container, Content} from 'native-base'

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container style={styles.container}>
         {/* <Content style={styles.wrap}> */}
          <Image source={pic} style={styles.img} />
        {/* </Content> */}
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:120,
    height: 200,
    padding: 0,
    marginBottom: 100
  },
  wrap: {
    height: 200
  },
  img: {
    width: 193,
    height: 110
  }
});
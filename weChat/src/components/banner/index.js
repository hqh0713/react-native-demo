import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
const Dimensions = require('Dimensions');
// 引入计时器
const TimerMixin = require('react-timer-mixin');

const dataList = [
    {url: '../Image/suolong.jpg', title: '1'},
    {url: '../Image/suolong.jpg', title: '2'}
]

export default class BannerList extends Component {
    mixins: [TimerMixin];
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    // 水平放置
                    horizontal={true}
                    // 隐藏水平滚动条
                    showsHorizontalScrollIndicator={false}
                    // 自动分页
                    pagingEnabled={true}
                >
                    <Image source={require('./Image/suolong.jpg')} style={{width: Dimensions.get('window').width, height: 100}}/>
                    <Image source={require('./Image/suolong.jpg')} style={{width: Dimensions.get('window').width, height: 100}}/>
                    <Image source={require('./Image/suolong.jpg')} style={{width: Dimensions.get('window').width, height: 100}}/>
                    <Image source={require('./Image/suolong.jpg')} style={{width: Dimensions.get('window').width, height: 100}}/>
                    <Image source={require('./Image/suolong.jpg')} style={{width: Dimensions.get('window').width, height: 100}}/>
                </ScrollView>
            </View>
        )
    }

    // renderAllImage() {
    //     let imglist = [];
    //     for (let i = 0; i < dataList.length; i++) {
    //         let img = dataList[i]
    //         imglist.push(
    //             <Image key={i} source={{uri: img.url}} style={{width: Dimensions.get('window').width, height: 100}}/>
    //         )
    //     }
    //     return imglist
    // }
}

const styles = StyleSheet.create({
});

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
const windowWidth = Dimensions.get('window').width

export default class BannerList extends Component {
    mixins: [TimerMixin];
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
    }
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
                    onMomentumScrollEnd = {(event)=>this.nextPage(event)}
                >
                    <Image source={require('./Image/suolong.jpg')} style={{width: windowWidth, height: 120}}/>
                    <Image source={require('./Image/banner.jpg')} style={{width: windowWidth, height: 120}}/>
                    <Image source={require('./Image/suolong.jpg')} style={{width: windowWidth, height: 120}}/>
                    <Image source={require('./Image/banner.jpg')} style={{width: windowWidth, height: 120}}/>
                </ScrollView>
                <View style={styles.pageViewContain}>
                    {this.renderPageCircle()}
                </View>
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
    renderPageCircle() {
        let circlrArr = [];
        let style;
        for (let i=0; i<4;i++) {
            style = (i === this.state.activeIndex) ? {color: 'orange'}: {color: 'white'};
            circlrArr.push(
                <Text key={i} style={[{fontSize: 25},style]}>&bull;</Text>
            )
        }
        return circlrArr
    }
    nextPage(event) {
        // x轴滚动距离
        let offsetX = event.nativeEvent.contentOffset.x;
        let currentIndex = Math.floor(offsetX/windowWidth)
        console.log(event.nativeEvent.contentOffset.x)
        this.setState({
            activeIndex: currentIndex
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        // height: 145
    },
    pageViewContain: {
        width: windowWidth,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

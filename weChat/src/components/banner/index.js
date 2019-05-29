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
const windowWidth = Dimensions.get('window').width;
const imgArrLength = 4;

export default class BannerList extends Component {
    mixins: [TimerMixin];
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            time: 3000,
            timer: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    // 水平放置
                    horizontal={true}
                    // 隐藏水平滚动条
                    showsHorizontalScrollIndicator={false}
                    // 自动分页
                    pagingEnabled={true}
                    // 滚动动画结束时调用此函数
                    onMomentumScrollEnd = {(event)=>this.nextPage(event)}
                    // 开始拖拽
                    onScrollBeginDrag = {()=>this.onScrollBeginDrag()}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewContain}>
                    {this.renderPageCircle()}
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.startTimer()
    }
    // 定时器
    startTimer() {
        let scrollView = this.refs.scrollView;
        this.state.timer = window.setInterval(()=> {
            if (this.state.activeIndex + 1 > imgArrLength) {
                this.setState({
                    activeIndex: 0
                })
            } else {
                this.setState({
                    activeIndex: this.state.activeIndex + 1
                })
            }
        }, this.state.time)
    }
    // 开始拖拽 清除定时器
    onScrollBeginDrag() {
        clearInterval(this.state.timer)
    }
    renderAllImage() {
        let imglist = [];
        for (let i = 0; i<imgArrLength; i++) {
            let imgUri = Math.random() > 0.5? require('./Image/suolong.jpg'): require('./Image/banner.jpg');
            imglist.push(
                <Image key={i} source={imgUri} style={{width: windowWidth, height: 120}}/>
            )
        }
        return imglist
    }
    renderPageCircle() {
        let circlrArr = [];
        let style;
        for (let i=0; i<imgArrLength; i++) {
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

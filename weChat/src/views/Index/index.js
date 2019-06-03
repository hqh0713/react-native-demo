import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    FlatList,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Dimensions = require('Dimensions');
import Banner from '../../components/banner'
import TabNav from "../../components/btmNavigator";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <View style={styles.index}>
                <Banner/>
                <FlatList
                    data={this.state.movies}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.moviesWrap}
                />
            </View>
        )
    }
    componentDidMount() {
        this._getindexList()
    }
    renderItem(item) {
        let imgUrl = ''
        switch (item.item.id) {
            case 1:
                imgUrl = require('./Image/movie_1.jpeg')
                break
            case 2:
                imgUrl = require('./Image/movie_2.jpeg')
                break
            case 3:
                imgUrl = require('./Image/movie_3.jpeg')
                break
            case 4:
                imgUrl = require('./Image/movie_4.jpeg')
                break
            case 5:
                imgUrl = require('./Image/movie_5.jpeg')
                break
        }
        return(
                <TouchableOpacity
                    activeOpacity={0.9}
                >
                    <View style={styles.movesList} key={item.item.id}>
                        <Image
                            source={imgUrl}
                            style={styles.movieImg}
                            key={item.item.title}>
                        </Image>
                        <View style={styles.movieDescWrap}>
                            <Text style={styles.movieTitle}>{item.item.title}</Text>
                            <Text>豆瓣评分：{item.item.mark}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }
    _getindexList() {
        let moviesArr = {
            1: {id: 1, title: '复仇者联盟4', mark: '8.2',},
            2: {id: 2, title: '皮卡丘侦探', mark: '6.6'},
            3: {id: 3, title: '阿拉丁', mark: '8.0'},
            4: {id: 4, title: '恶人传', mark: '8.6'},
            5: {id: 5, title: '一个母亲的复仇', mark: '6.8'}
        }
        let moviesList = []
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((res) => {
                moviesList = res.movies
                moviesList.forEach((item, index) => {
                    moviesList[index] = moviesArr[item.id]
                })
                this.setState({
                    movies: moviesList
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

const styles = StyleSheet.create({
    index: {
        flex: 1
    },
    movesList: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
    movieImg: {
       flex: 1,
       height: 120
    },
    movieDescWrap: {
        flex: 1,
        marginLeft: 10
    },
    movieTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    }
})

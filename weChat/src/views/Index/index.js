import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Dimensions = require('Dimensions');
import Banner from '../../components/banner'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <View style={styles.loginWrap}>
                <Banner/>
                <Button title='go login' onPress={()=> this.props.navigation.navigate('LoginScreen')}/>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
    componentDidMount() {
        this._getindexList()
    }
    _getindexList() {
        let moviesList = []
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((res) => {
                this.state.movies = res.movies

            })
            .catch((error) => {
                console.error(error)
            })
    }
}

const styles = StyleSheet.create({
    loginWrap: {
        flex: 1
    },
    loginImg: {
        marginTop: 50,
        marginBottom: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white'
    },
    loginInput: {
        width: Dimensions.get('window').width,
        height: 35,
        marginBottom: 1,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    loginBtnWrap: {
        marginTop: 20,
        marginBottom: 10,
        width: 350,
        height: 40,
        backgroundColor: 'blue',
        opacity: 0.6,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginRegister: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350
    }
})

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
var Dimensions = require('Dimensions')

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            account: 'dd',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.loginWrap}>
                <Image
                    source={require('./Image/suolong.jpg')}
                    style={styles.loginImg}
                />
                <TextInput
                    placeholder={'请输入账号'}
                    autoFocus = {true}
                    style={styles.loginInput}
                    onChangeText={(value) => this.setState({account: value})}
                />
                <TextInput
                    placeholder={'请输入密码'}
                    password = {true}
                    style={styles.loginInput}
                    onChangeText={(value) => this.setState({password: value})}
                />
                <TouchableOpacity activeOpacity={0.9} onPress={() =>{this.press()}}>
                    <View style={styles.loginBtnWrap}>
                        <Button title='登陆' style={styles.loginBtnText} onPress={()=> this.props.navigation.navigate('IndexScreen')}/>
                        {/*<Text style={styles.loginBtnText}>登陆</Text>*/}
                    </View>
                </TouchableOpacity>
                <View style={styles.loginRegister}>
                    <Text style={{color: '#63a9f8'}}>无法登陆</Text>
                    <Text style={{color: '#63a9f8'}}>申请新账号</Text>
                </View>
            </View>
        )
    }
    press() {
        console.log('提交')
    }
}

const styles = StyleSheet.create({
    loginWrap: {
        flex: 1,
        alignItems: 'center'
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

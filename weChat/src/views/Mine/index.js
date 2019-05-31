import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class Login extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={styles.loginWrap}>
                <Text>Mine</Text>
                <Button title='go login' onPress={()=> this.props.navigation.navigate('LoginScreen')}/>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginWrap: {
        flex: 1
    }
})

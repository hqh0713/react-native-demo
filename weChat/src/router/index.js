import React from 'react';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from '../../src/views/Login/index'
import IndexScreen from '../../src/views/Index/index'
import MineScreen from '../../src/views/Mine/index'

const TabNavigator = createBottomTabNavigator(
    {
        IndexScreen: {
            screen: IndexScreen,
            navigationOptions: {
                title: '首页',
                headerTitle: '首页',
                tabBarOptions: {
                    activeTintColor: '#e91e63',
                    labelStyle: {
                        fontSize: 14,
                    }
                },
                tabBarIcon: (
                    <Icon name='anchor' size={20}/>
                )
            }
        },
        MineScreen: {
            screen: MineScreen,
            navigationOptions: {
                title: '我的',
                headerTitle: '我的',
                tabBarOptions: {
                    activeTintColor: '#e91e63',
                    labelStyle: {
                        fontSize: 14,
                    }
                },
                tabBarIcon: (
                    <Icon name='dragon' size={20}/>
                )

            }
        }
    }
);
const LoginStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: '登陆页',
            headerTitle: '登陆页'
        }
    },
    IndexScreen: {
        screen: TabNavigator,
        navigationOptions: {
            title: '登陆页',
            headerTitle: '登陆页'
        }
    }
}, {
    initialRouteName: 'IndexScreen'
});


export const RootNavigator = createAppContainer(LoginStack);



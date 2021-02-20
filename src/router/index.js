import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Login, Register, Splash, UploadPhoto, Home, Messages, Settings } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Messages' component={Messages} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen name='splash' component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default Router;
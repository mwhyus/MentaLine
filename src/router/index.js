import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../components';
import {
    Chatting,
    ChooseDoctor,
    DoctorProfile,
    GetStarted,
    Home,
    Login,
    Maps,
    Messages, 
    Register, 
    Settings, 
    Splash,
    UploadPhoto,
    UserProfile 
    } from '../pages';

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
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name='splash' component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name='Maps' component={Maps} options={{ headerShown: false }} />
            <Stack.Screen name='ChooseDoctor' component={ChooseDoctor} options={{ headerShown: false }} />
            <Stack.Screen name='Chatting' component={Chatting} options={{ headerShown: false }} />
            <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }} />
            <Stack.Screen name='DoctorProfile' component={DoctorProfile} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default Router;
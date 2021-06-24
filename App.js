import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";

import Homepage from './Homepage';
import TeacherInfo from './TeacherInfo';
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import SplashScreen from "./SplashScreen";
import Login from "./teramobil/Login";
import WelcomePage from "./teramobil/WelcomePage";
import LoginForm from "./teramobil/LoginForm";
import HomepageUI from "./teramobil/HomepageUI"
import BelediyePage from "./teramobil/BelediyePage";

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const App2 = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal"
            }}
                headerMode='float'
                animation='fade'
            >
                <AuthStack.Screen name="Welcome" component={WelcomePage}  options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
                <AuthStack.Screen name="Login" component={LoginForm}  options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
                <AuthStack.Screen name="Homepage" component={HomepageUI}/>
                <AuthStack.Screen name="TeacherInfo" component={TeacherInfo}/>
                <AuthStack.Screen name="BelediyePage" component={BelediyePage}/>

            </AuthStack.Navigator>

        </NavigationContainer>


    );
};
export default App2;
import React, { useState } from "react";
import {StatusBar, StyleSheet, View, ImageBackground, Dimensions, Text,Image} from "react-native";
import {TapGestureHandler,State} from "react-native-gesture-handler";
import Animated, {Easing} from "react-native-reanimated";
import {Component} from "react";
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

export default function WelcomePage(props,{navigation}){
    const onStateChange = () => {
        props.navigation.navigate("Login");
    }
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#F1F1F1',
                justifyContent: 'flex-end'
            }}>
                <View style={StyleSheet.absoluteFill}>
                    <Animatable.Image
                        duration= {2000}
                        animation='slideInRight'
                        source={require('../assets/backgroundTeraMobile.jpeg')}
                        style={{flex: 1, width: null, height: null}}>
                    </Animatable.Image>
                </View>
                <View style={{height: height / 2}}>
                    <Animatable.View style={styles.title} animation='bounceInLeft'>
                        <Text style={{fontSize: 40, fontWeight: 'bold'}}>TeraMobil</Text>
                    </Animatable.View>
                </View>
                <View style={{height: height / 4}}>
                    <TapGestureHandler onHandlerStateChange={onStateChange}>
                        <Animatable.View animation='bounceInUp' style={{...styles.button} }>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Giriş Yap</Text>
                        </Animatable.View>
                    </TapGestureHandler>
                    <TapGestureHandler onHandlerStateChange={onStateChange}>
                        <Animatable.View animation='bounceInUp' style={{...styles.button} }>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Adres Kaydet</Text>
                        </Animatable.View>
                    </TapGestureHandler>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,

    },
    title: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 5,
    }

});

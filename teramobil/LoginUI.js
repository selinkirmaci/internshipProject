import React, { useState } from "react";
import {StatusBar, StyleSheet, View, ImageBackground, Dimensions, Text,Image} from "react-native";
import {TapGestureHandler,State} from "react-native-gesture-handler";
import Animated, {Easing} from "react-native-reanimated";
import {Component} from "react";

const {Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate } = Animated;
const {width, height} = Dimensions.get('window');

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}

export default class LoginUI extends Component{
    constructor() {
        super();
        this.buttonOpacity = new Value(1);
        this.onStateChange = event([
            {
                nativeEvent: ({state}) => block([
                    cond(eq(state,State.END),set(this.buttonOpacity,runTiming(new Clock(),1,0)))
                ])
            }
        ]);

    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'flex-end'
            }}>
                <View style={StyleSheet.absoluteFill}>
                    <Image source={require('../assets/backgroundTeraMobile.jpeg')}
                           style={{flex: 1, width: null, height: null}}>
                    </Image>
                </View>
                <View style={{height: height / 2}}>
                    <View style={styles.title}>
                        <Text style={{fontSize: 40, fontWeight: 'bold'}}>TeraMobil</Text>
                    </View>
                </View>
                <View style={{height: height / 4}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{...styles.button, opacity:this.buttonOpacity} }>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Giriş Yap</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <View style={styles.button}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Web Servisi Güncelle</Text>
                    </View>
                </View>
            </View>
        );
    };
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
        marginHorizontal: 30,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,

    },
    title: {
        height: 50,
        marginHorizontal: 30,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    }

});

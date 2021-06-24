import React, { useState } from "react";
import {
    StatusBar,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import {TapGestureHandler,State} from "react-native-gesture-handler";
import Animated, {Easing} from "react-native-reanimated";
import {Component} from "react";
import {FontAwesome} from "@expo/vector-icons";

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

export default function LoginForm (props){
    const [visibale,setVisiable] = React.useState(false);
    const [visiableIcon,setVisiableIcon] = React.useState("eye-slash");
    const [secureTextEntry,setSecureTextEntry] = React.useState(true);
    const [emailExists,setEmailExists] = React.useState(false);
    const [email,setEmail] = React.useState(false);


    const handlePasswordVisibality = () =>{
        if(visibale===true)
        {
            setVisiable(false);
            setVisiableIcon("eye");
            setSecureTextEntry(false);
        }else
        {
            setVisiable(true);
            setVisiableIcon("eye-slash");
            setSecureTextEntry(true);
        }
    }
    const handleEmailChange = (text) =>{
        setEmail(text);
        if(text.toString().length !==0 )
        {
            setEmailExists(true);
        }
        else
        {
            setEmailExists(false);
        }
    }
    const handleLogin = () =>{
        props.navigation.navigate("Homepage");

    }
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'flex-end'
            }}>
                <View style={StyleSheet.absoluteFill}>
                    <Image source={require('../assets/backgroundTeraMobile2.jpeg')}
                           style={{flex: 1, width: null, height: null}}>
                    </Image>
                </View>
                <View >
                    <View style={styles.title}>
                        <Text style={{fontSize: 40, fontWeight: 'bold'}}>TeraMobil</Text>
                    </View>
                </View>
                <View style={{height: height / 2.8}}>
                        <View style={{...styles.input,flexDirection:'row'} }>
                            <FontAwesome name='user' size={20} style={{marginVertical:13,marginLeft:15}}></FontAwesome>
                            <TextInput onChangeText={(text)=>handleEmailChange(text)} placeholder="Kullanıcı adı"  style={{fontSize: 20, marginLeft:20,flex:3,marginVertical:10}}></TextInput>
                            {emailExists?
                                <FontAwesome color='green' name='check-circle' size={20}
                                             style={{marginVertical: 13, marginRight: 20}}></FontAwesome>:null
                            }
                        </View>
                        <Animated.View style={{...styles.input,flexDirection:'row'} }>
                            <FontAwesome name='lock' size={20} style={{marginVertical:13,marginLeft:15}}></FontAwesome>
                            <TextInput secureTextEntry={secureTextEntry} placeholder="Şifre"  style={{fontSize: 20, marginLeft:20,flex:3,marginVertical:10}}></TextInput>
                           <TouchableOpacity onPress={handlePasswordVisibality}>
                                <FontAwesome color='grey' name={visiableIcon} size={20} style={{marginVertical:13,marginRight:20}}></FontAwesome>
                           </TouchableOpacity>
                           </Animated.View>
                    <TapGestureHandler onHandlerStateChange={handleLogin}>
                        <Animated.View style={{...styles.button} }>
                            <Text style={{fontSize: 20,fontWeight:'bold'}}>GİRİŞ</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <TapGestureHandler>
                        <Animated.View style={{...styles.link} }>
                            <Text style={{fontSize: 15,fontWeight:'bold'}}>Web Servisi Güncelle</Text>
                        </Animated.View>
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
    input: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,

    },
    button: {
        marginTop: 12,
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 100,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,

    },
    link: {
        marginHorizontal: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,

    },
    title: {
        marginHorizontal:20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 10,
    }

});

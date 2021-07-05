import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FontAwesome5} from "@expo/vector-icons";

const Box = (props) => {
    return (
        <View
            style={props.style}>
            <View style={{...StyleSheet.absoluteFill,opacity:0.7,borderRadius:10}}>
                <Image
                    source={require('../assets/white2.jpg')}
                    style={{flex: 1, width: null, height: null,borderRadius:20}}>
                </Image>
            </View>
            <View style={{justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                <FontAwesome5 name={props.icon} size={50} style={{marginVertical: 2,width: 100,marginHorizontal: 45}}></FontAwesome5>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },
    title: {
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:20,
        textAlign:'center',
        fontSize:17,
    }

});
export default Box;
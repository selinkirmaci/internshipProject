import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FontAwesome5} from "@expo/vector-icons";

const Box = (props) => {
    return (
        <Animatable.View
            animation='fadeIn'
            duration={1000}
            delay={150*props.index}
            style={props.style}>
            <View style={{...StyleSheet.absoluteFill,opacity:0.7,borderRadius:10}}>
                <Image
                    source={require('../assets/white2.jpg')}
                    style={{flex: 1, width: null, height: null,borderRadius:20}}>
                </Image>
            </View>
            <View>
                <FontAwesome5 name={props.icon} size={50} style={{marginVertical: 10,marginHorizontal:53,width: 100}}></FontAwesome5>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </Animatable.View>
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
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal:45,
        fontSize:17,
    }

});
export default Box;
import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';

const {width,height} = Dimensions.get('window');

const ProgramBox = (props) => {

    var randomColor = require('randomcolor'); // import the script
    var color = randomColor({
        luminosity: 'light',
        hue: 'orange'
    });

    return (
        <View style={{...styles.box,borderColor:color}}>
            <Text style={{fontSize:20}}>{props.item.title}</Text>
            <Text>{props.item.startTime}-{props.item.endTime}</Text>
        </View>
    );
}

export default ProgramBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    populationView:{
        height: height/17,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
    },
    box: {
        flex: 1,
        width:width/1.2,
        height:height/7,
        backgroundColor:'white',
        margin:10,
        elevation:2,
        borderLeftWidth:10,
        padding:5
    }
});
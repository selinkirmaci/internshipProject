import React from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
const {width,height} = Dimensions.get('window');

const ActivityBox = (props) => {

    return (
        <TouchableOpacity>
        <View style={{alignContent:'center',flexDirection:'row', marginVertical:5,height:70,width:width/1.15,marginHorizontal:3}}>
            <Image
                source={require('../assets/activity.png')}
                style={{flex: 0.35, width: null, height: null}}
                resizeMode='contain'>
            </Image>
            <View style={{flexDirection:'column'}}>
                <Text style={{marginHorizontal:20,marginBottom:5}}>
                    {props.title}
                </Text>
                <Text style={{marginHorizontal:20}}>
                    {props.details}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

export default ActivityBox;
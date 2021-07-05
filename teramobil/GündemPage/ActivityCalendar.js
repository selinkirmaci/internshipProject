import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView, TextInput, Image, FlatList, SafeAreaView
} from 'react-native';
import SearchBar from "react-native-elements";
import Animated from "react-native-reanimated";
import {FontAwesome, FontAwesome5} from "@expo/vector-icons";
import Schedule from "./Schedule";

const {width,height} = Dimensions.get('window');

const ActivityPage = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center',marginTop:15,marginLeft:10}}>
                    <FontAwesome5 name='arrow-left' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.goBack();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Etkinlikler</Text>
                </View>
            </View>
            <Schedule></Schedule>
        </SafeAreaView>
    );
}

export default ActivityPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    listItem:{
        backgroundColor: 'white',
        marginVertical: 5,
        height:50,
        width: width/1.06,
        alignSelf:'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius:15,
    },
    title:{
        marginVertical: 5,
        height:80,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    serachBar:{
        marginTop: 15,
        height:50,
        marginHorizontal:5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor:'white',
    },


});
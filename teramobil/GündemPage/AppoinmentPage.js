import React, {useState} from 'react';
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

const AppoinmentPage = (props) => {

    /*
    const items : {
        '2021-07-22': [{name: 'randevu 1',time:'12.00-13.00'}],
        '2021-07-23': [{name: 'randevu 2',time:'12.00-13.00'}],
        '2021-07-24': [{name: 'randevu 3',time:'12.00-13.00'}],
        '2021-07-25': [{name: 'randevu 4',time:'12.00-13.00'}, {name: 'randevu 5',time:'12.00-13.00'}]
    }
     */
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    //const numItems = 5;
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            //height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center',marginTop:15,marginLeft:10}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15,marginRight:130}}>Randevular</Text>
                    <FontAwesome5 name='plus' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                </View>
            </View>
            <Schedule loadItems = {loadItems}></Schedule>
        </SafeAreaView>
    );
}

export default AppoinmentPage;

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
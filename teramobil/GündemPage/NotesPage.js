import React from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Modal,
    Picker,
    FlatList,
    TouchableOpacity, ScrollView, TextInput
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Box from "../Box";
import {backgroundColor} from "react-native-calendars/src/style";
import ActivityBox from "../ActivityBox";
import ProgramBox from "./ProgramBox";
const {width,height} = Dimensions.get('window');

const NotesPage = (props) => {

    const notes = [
        {
            id: '1',
            title: 'Task 1',
            startTime: '9.00',
            endTime: '10.00',
            details: 'Detail 1',
        },
        {
            id: '2',
            title: 'Task 2',
            startTime: '11.00',
            endTime: '12.00',
            details: 'Detail 2',
        },
        {
            id: '3',
            title: 'Task 3',
            startTime: '13.00',
            endTime: '14.00',
            details: 'Detail 3',
        },
        {
            id: '4',
            title: 'Task 4',
            startTime: '15.00',
            endTime: '16.00',
            details: 'Detail 4',
        },
        {
            id: '5',
            title: 'Task 5',
            startTime: '8.00',
            endTime: '16.00',
            details: 'Detail 4',
        },

    ]
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Günlük Program</Text>
                </View>
            </View>
            <View style={{backgroundColor:'white',height:height/1.1,width:width/1.1,marginTop:5,elevation:5,borderRadius:10}}>
                <FlatList
                    data={notes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}

export default NotesPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems:'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height:height/6,
        width:width/2.8,
    },
    title: {
        fontSize: 32,
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
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width:width,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        width:width/1.055,
        height:height/3,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    chosing: {
        justifyContent:'center',
        height:height/5,
        alignItems:'center',
        flexDirection:'column',
        marginTop: 25,
    },
    picker: {
        justifyContent:'center',
        height:height/4,
        width:width/1.1,
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'column',
    },
});
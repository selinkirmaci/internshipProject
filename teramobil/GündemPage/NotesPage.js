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
import ActivityBox from "../ActivityBox";
import ProgramBox from "./ProgramBox";
import NotesModal from "./NotesModal";
import MazeretModal from "../PersonelPage/MazeretModal";
const {width,height} = Dimensions.get('window');

const NotesPage = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModelOpen = () => {
        setModalVisible(true);
    }
    const handleModelClose = () => {
        setModalVisible(false);
    }

    const [selected,setSelected] = React.useState([false,false,false,false,false]);

    const notes = [
        {
            id: 1,
            title: 'Note 1',
            details: 'Detail 1',
            selected: false,
        },
        {
            id: 2,
            title: 'Note 2',
            details: 'Detail 1',
            selected: false,
        },
        {
            id: 3,
            title: 'Note 3',
            details: 'Detail 1',
            selected: false,
        },
        {
            id: 4,
            title: 'Note 4',
            details: 'Detail 1',
            selected: false,
        },
        {
            id: 5,
            title: 'Note 5',
            details: 'Detail 1',
            selected: false,
        },
    ]

    const handlePressNote = (id) =>{
        const temp = selected;
        temp[id-1] = !temp[id-1];
        setSelected(temp);
        console.log(selected);
    }

    const Item = ({ item }) => (
        <TouchableOpacity onPress={()=>handlePressNote(item.id)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            {selected[item.id-1]?
                <View style={{
                    position: 'absolute',
                    marginLeft: width / 3,
                    marginTop: 20,
                    zIndex: 10,
                    left: 0,
                    top: 0,
                    elevation: 10
                }}>
                    <FontAwesome5 size={18} color='green' name='check-circle'></FontAwesome5>
                </View>:null
            }
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item item={item} />
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
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15,marginRight:140}}>Notlarım</Text>
                    <FontAwesome5 name='search' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{handleModelOpen()}}></FontAwesome5>

                </View>
            </View>
            <NotesModal modalVisible={modalVisible} handleModelOpen={handleModelOpen} handleModelClose={handleModelClose} ></NotesModal>
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
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height:height/5,
        width:width/2.8,
        elevation:5,
        borderColor:'#f5c842',
        borderTopWidth:10,
        alignItems:'center',
    },
    title: {
        fontSize: 25,
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
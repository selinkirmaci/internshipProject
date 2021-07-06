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
    TouchableOpacity, ScrollView
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Box from "../Box";
import {FontAwesome} from "@expo/vector-icons";
const {width,height} = Dimensions.get('window');

const MayorVisitsPage = (props) => {

    const [müdürlükValue, setSelectedMüdürlük] = React.useState(0);
    const [müdürlükName, setSelectedMüdürlükName] = React.useState('Müdürlükler');
    const [bringData, setBringData] = React.useState(false);
    const [modalVisibleMüdürlük, setModalVisibleMüdürlük] = React.useState(false);


    const handleBringData =() => {
        setBringData(true);
    };

    const handleModalOpenMüdürlük =() => {
        setModalVisibleMüdürlük(true);
    };

    const handleModalCloseMüdürlük =(index,name) => {
        setModalVisibleMüdürlük(false);
        setSelectedMüdürlükName(name);
        setSelectedMüdürlük(index);
    };
    const müdürlükler = [
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
    ];


    return (
        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleMüdürlük}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisibleMüdürlük(!modalVisibleMüdürlük);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection:'row',width:width-50,marginTop:10,borderBottomWidth:1}}>
                            <FontAwesome5 name='times' size={25} styles = {{marginRight:10}} onPress={()=>handleModalCloseMüdürlük(müdürlükValue,müdürlükName)}></FontAwesome5>
                            <Text style={{fontSize:20,marginLeft:95,marginRight:80,marginBottom:8}}>Mahalleler</Text>
                        </View>
                        <View style={styles.picker}>
                            <ScrollView contentContainerStyle={{width:width/1.1,alignItems:'center',justifyContent:'center'}}>
                                {
                                    müdürlükler.map((event,index) =>
                                        {
                                            return (
                                                <TouchableOpacity style={{justifyContent:'center',alignContent:'center'}} onPress={()=>handleModalCloseMüdürlük(index+1,event.neighborhood)}>
                                                    <Text style={{fontSize:20,marginBottom:10,marginTop:10,textAlign:'center'}}>{event.neighborhood}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    )
                                }
                            </ScrollView>
                        </View>
                    </View>

                </View>
            </Modal>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Başkan Ziyaretleri</Text>
                </View>
            </View>
            <View style={styles.chosing}>
                    <TouchableOpacity onPress={handleModalOpenMüdürlük} style={{
                        justifyContent: 'center',
                        height: 40,
                        backgroundColor: 'white',
                        elevation: 5,
                        width: width / 1.2,
                        alignItems: 'center',
                        borderRadius: 10
                    }}>
                        <Text style={{fontSize: 20}}>{müdürlükName}</Text>
                    </TouchableOpacity>

                <TouchableOpacity onPress={handleBringData}style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/2,alignItems:'center',borderRadius:10,marginTop:10}}>
                    <Text style={{fontSize:20}}>Verileri getir</Text>
                </TouchableOpacity>
            </View>
            {bringData?
                <View>
                </View>
                :null
            }
        </SafeAreaView>
    );
}

export default MayorVisitsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        flexDirection:'column',
        alignItems:'center',
        height:height/4,
        justifyContent:'center',
        width:width/2.3,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
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
        marginTop: 5,
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
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
    TouchableOpacity, ScrollView, TextInput
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Box from "./Box";
const {width,height} = Dimensions.get('window');

const PersonelMaliyetPage = (props) => {

    const [kriterValue, setSelectedKriter] = React.useState(0);
    const [kriterName, setSelectedKriterName] = React.useState('Kriter');
    const [bringData, setBringData] = React.useState(false);
    const [tableName, setTableName] = React.useState(false);
    const [year, setYear] = React.useState('2021');
    const [month, setMonth] = React.useState('7');
    const [changed, setChange] = React.useState(false);
    const [currentData, setCurrentData] = React.useState([]);



    const [modalVisible, setModalVisible] = React.useState(false);

    const handleChangeYear =(text) => {
        setYear(text);
    };
    const handleChangeMonth =(text) => {
        setMonth(text);
    };

    const handleModalOpen =() => {
        setModalVisible(true);
    };
    const handleModalClose =(index,name) => {
        setSelectedKriterName(name);
        setSelectedKriter(index);
        setChange(true);
        setModalVisible(false);
    };
    const handleBringData =() => {
        if(kriterValue===1) {
            setTableName('Aylar');
            setCurrentData(forMonth);
        }
        else if(kriterValue===2) {
            setTableName('Müdürlükler');
            setCurrentData(forM);
        }
        else if(kriterValue===3) {
            setTableName('Personel Tipi');
            setCurrentData(forP);
        }

        setBringData(true);
    };

    const boxes = [
        {
            title: 'Aylara göre',
        },
        {
            title: 'Müdürlüğe Göre',
        },
        {
            title: 'Personel Tipine göre',
        },
    ];
    const forM =[
        {
            title: 'Bilgi İşlem Müdürlüğü',
            net: '20.704',
            brüt: '39.202',
        },
        {
            title: 'Mali Hizmetler Müdürlüğü',
            net: '6.704',
            brüt: '10.202',
        },
    ];

    const forP =[
        {
            title: 'Personel Tipi1',
            net: '20.704',
            brüt: '39.202',
        },
        {
            title: 'Personel Tipi2',
            net: '20.704',
            brüt: '39.202',
        },
    ];
    const forMonth =[
        {
            title: 'Ocak',
            net: '20.704',
            brüt: '39.202',
        },
        {
            title: 'Haziran',
            net: '20.704',
            brüt: '39.202',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection:'row',width:width-50,marginTop:10,borderBottomWidth:1}}>
                            <FontAwesome5 name='times' size={25} styles = {{marginRight:10}} onPress={()=>handleModalClose(kriterValue,kriterName)}></FontAwesome5>
                            <Text style={{fontSize:20,marginLeft:115,marginRight:110,marginBottom:8}}>Kriter</Text>
                        </View>
                        <View style={styles.picker}>
                            {
                                boxes.map((event,index) =>
                                    {
                                        return (
                                            <TouchableOpacity onPress={()=>handleModalClose(index+1,event.title)}>
                                                <Text style={{fontSize:20,marginBottom:10,marginTop:10}}>{event.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )
                            }
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Personel Maliyetleri</Text>
                </View>
            </View>
            <View style={styles.chosing}>
                <TouchableOpacity  onPress={handleModalOpen} style={{justifyContent:'center',height:50,backgroundColor:'white',elevation:5,width:width/1.2,alignItems:'center',borderRadius:10,marginBottom:10}}>
                    <Text style={{fontSize:20}}>{kriterName}</Text>
                </TouchableOpacity>
                {changed?
                    <View style={{marginTop: 10}}>
                        <View style={{flexDirection: 'row', width: 300}}>
                            <Text style={{flex: 1, alignItems: 'flex-start', fontSize: 20}}>Yıl</Text>
                            {kriterValue===3?
                                <Text style={{flex: 1, alignItems: 'flex-end', fontSize: 20}}>Ay</Text>:null
                            }
                        </View>
                        <View style={{flexDirection: 'row', width: 300, height: 40}}>
                            <TextInput onChange={() => handleChangeYear(text)}
                                       style={{flex: 1, borderRadius: 10, backgroundColor: 'white', marginRight: 5}}
                                       defaultValue={year} placeholder='Yıl'></TextInput>
                            {kriterValue===3?
                                <TextInput onChange={() => handleChangeMonth(text)}
                                           style={{flex: 1, borderRadius: 10, backgroundColor: 'white'}}
                                           defaultValue={month} placeholder='Ay'></TextInput>:null
                            }
                        </View>
                    </View>:null
                }
                <TouchableOpacity  onPress={handleBringData} style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/2,alignItems:'center',borderRadius:10,marginTop:10}}>
                    <Text style={{fontSize:20}}>Verileri getir</Text>
                </TouchableOpacity>

            </View>
            {bringData?
                <View>
                    <View style={{flexDirection:'row',
                        backgroundColor:'white',
                        elevation:5
                        ,marginTop:50,
                        marginHorizontal:5,
                        borderRadius:10,
                        height:35,
                        alignItems:'center'
                    }}>
                        <View style={{marginLeft:10,flex:2,alignItems:'flex-start'}}>
                            <Text style={{fontSize:18}}>{tableName}</Text>
                        </View>
                        <View  style={{marginLeft:11,flex:1,alignItems:'center'}}>
                            <Text style={{fontSize:18,textAlign:'right'}}>Net</Text>
                        </View>
                        <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 18,textAlign:'right'}}>Brüt</Text>
                        </View>
                    </View>
                    {bringData?
                        <View style={{height: 390}}>
                            <ScrollView contentContainerStyle={{marginTop: 10}}>
                                {
                                    currentData.map((event, index) => {
                                            return (
                                                <View style={{
                                                    marginTop: 5,
                                                    flexDirection: 'row',
                                                    borderRadius: 10,
                                                    backgroundColor: 'white',
                                                    marginHorizontal:5,
                                                }}>
                                                    <View style={{marginLeft: 10, flex: 2, alignItems: 'flex-start'}}>
                                                        <Text
                                                            style={{fontSize: 18}}>{event.title}</Text>
                                                    </View>

                                                    <View style={{marginRight: 10, flex: 1, alignItems: 'center'}}>
                                                        <Text style={{fontSize: 18}}>{event.net}</Text>
                                                    </View>

                                                    <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
                                                        <Text style={{fontSize: 18}}>{event.brüt}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    )
                                }
                            </ScrollView>
                        </View>:null

                    }
                    <View style={{flexDirection:'row',backgroundColor:'white',elevation:5,alignItems:'flex-end',marginTop:10}}>
                        <View style={{marginLeft:10,flex:1,alignItems:'flex-start'}}>
                            <Text style={{fontSize:18}}>Toplam</Text>
                        </View>
                        <View  style={{marginRight:10,flex:1,alignItems:'flex-end'}}>
                            <Text style={{fontSize:18}}>129</Text>
                        </View>
                    </View>
                </View>
                :null
            }
        </SafeAreaView>
    );
}

export default PersonelMaliyetPage;

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
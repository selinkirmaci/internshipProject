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
import Box from "./Box";
import {FontAwesome} from "@expo/vector-icons";
const {width,height} = Dimensions.get('window');

const PersonelNumbersPage = (props) => {

    const [kriterValue, setSelectedKriter] = React.useState(0);
    const [müdürlükValue, setSelectedMüdürlük] = React.useState(0);

    const [müdürlükVisibale, setMüdürlükVisiable] = React.useState(false);

    const [change, setChange] = React.useState(false);


    const [kriterName, setSelectedKriterName] = React.useState('Kriter');
    const [müdürlükName, setSelectedMüdürlükName] = React.useState('Müdürlükler');
    const [tableName, setTableName] = React.useState('');

    const [currentData, setCurrentData] = React.useState([]);



    const [modalVisible, setModalVisible] = React.useState(false);
    const [bringData, setBringData] = React.useState(false);


    const handleModalOpen =() => {
        setModalVisible(true);
    };

    const handleBringData =() => {
        if(kriterValue===1)
        {
            setCurrentData(education);
            setTableName('Personel Tipi');
        }else if(kriterValue===2)
        {
            setCurrentData(education);
            setTableName('Personel Eğitim Durumu');
        }else if(kriterValue===3)
        {
            setCurrentData(müdürlükler);
            setTableName('Müdürlük İsimleri');
        }
        setBringData(true);
        setChange(false);
    };

    const handleModalClose =(index,name) => {
        setSelectedKriterName(name);
        setSelectedKriter(index);
        setChange(true);
        setModalVisible(false);
        if(index!==3)
            setMüdürlükVisiable(true);
        else
            setMüdürlükVisiable(false);

    };


    const [modalVisibleMüdürlük, setModalVisibleMüdürlük] = React.useState(false);

    const handleModalOpenMüdürlük =() => {
        setModalVisibleMüdürlük(true);
    };


    const handleModalCloseMüdürlük =(index,name) => {
        setModalVisibleMüdürlük(false);
        setSelectedMüdürlükName(name);
        setSelectedMüdürlük(index);
    };

    const boxes = [
        {
            id:121,
            title: 'Personel Tipine göre',
        },
        {
            id:121,
            title: 'Personel Eğitim durumuna göre',
        },
        {
            id:121,
            title: 'Sadece Müdürlüğe göre',
        },
    ];
    const müdürlükler = [
        {
            id:121,
            title: 'Mali Hizmetler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Yazı İşleri',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Bilgi İşlem',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Fen İşleri',
            personelNumber:38,
        },{
            id:121,
            title: 'İnsan Kaynakları ve Eğitim',
            personelNumber:38,
        },{
            id:121,
            title: 'Destek Hizmetleri',
            personelNumber:38,
        },{
            id:121,
            title: 'Zabıta',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Özel Kalem',
            personelNumber:38,
        },{
            id:121,
            title: 'Teftiş Kurulu',
            personelNumber:38,
        },{
            id:121,
            title: 'Litera Bilişim Teknolojileri',
            personelNumber:38,
        },{
            id:121,
            title: 'Park ve Bahçeler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Mali Hizmetler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Yazı İşleri',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Bilgi İşlem',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Fen İşleri',
            personelNumber:38,
        },{
            id:121,
            title: 'İnsan Kaynakları ve Eğitim',
            personelNumber:38,
        },{
            id:121,
            title: 'Destek Hizmetleri',
            personelNumber:38,
        },{
            id:121,
            title: 'Zabıta',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Özel Kalem',
            personelNumber:38,
        },{
            id:121,
            title: 'Teftiş Kurulu',
            personelNumber:38,
        },{
            id:121,
            title: 'Litera Bilişim Teknolojileri',
            personelNumber:38,
        },{
            id:121,
            title: 'Park ve Bahçeler',
            personelNumber:38,
        },
    ];
    const education = [
        {
            id:121,
            title: '4 Yıl Süreli Yüksek Öğrenim Mezunu',
            personelNumber:38,
        },
        {
            id:121,
            title: '2 Yıl Süreli Yüksek Öğrenim Mezunu',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Lise Mezunu',
            personelNumber:38,
        },
        {
            id:121,
            title: 'İlkokul Mezunu ',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Doktora Mezunu',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Yüksek Lisans Mezunu',
            personelNumber:38,
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
                            <Text style={{fontSize:20,marginLeft:95,marginRight:80,marginBottom:8}}>Müdürlük</Text>
                        </View>
                        <View style={styles.picker}>
                            <ScrollView contentContainerStyle={{width:width/1.1,alignItems:'center',justifyContent:'center'}}>
                            {
                                müdürlükler.map((event,index) =>
                                    {
                                        return (
                                            <TouchableOpacity style={{justifyContent:'center',alignContent:'center'}} onPress={()=>handleModalCloseMüdürlük(index+1,event.title+' Müdürlüğü')}>
                                                <Text style={{fontSize:20,marginBottom:10,marginTop:10,textAlign:'center'}}>{event.title} Müdürlüğü</Text>
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
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Personel Sayıları</Text>
                </View>
            </View>
            <View style={styles.chosing}>
                <TouchableOpacity  onPress={handleModalOpen} style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/1.2,alignItems:'center',borderRadius:10,marginBottom:10}}>
                    <Text style={{fontSize:20}}>{kriterName}</Text>
                </TouchableOpacity>
                {müdürlükVisibale?
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
                    </TouchableOpacity>:null
                }
                <TouchableOpacity onPress={handleBringData}style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/2,alignItems:'center',borderRadius:10,marginTop:10}}>
                    <Text style={{fontSize:20}}>Verileri getir</Text>
                </TouchableOpacity>
            </View>
            {bringData?
                <View>
                    <View style={{flexDirection:'row',backgroundColor:'white',elevation:5,marginTop:20}}>
                        <View style={{marginLeft:10,flex:2,alignItems:'flex-start'}}>
                            <Text style={{fontSize:18}}>{tableName}</Text>
                        </View>
                        <View  style={{marginLeft:11,flex:1,alignItems:'center'}}>
                            <Text style={{fontSize:18,textAlign:'right'}}>Personel Sayısı</Text>
                        </View>
                        {!müdürlükVisibale&!change?
                            <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 18,textAlign:'right'}}>İzinli Sayısı</Text>
                            </View>:null
                        }
                    </View>
                    <View style={{height:390}}>
                        <ScrollView contentContainerStyle={{marginTop:10}}>
                            {
                                currentData.map((event,index) =>
                                    {
                                        return (
                                            <View style={{marginTop:5,flexDirection:'row',borderRadius:10,backgroundColor:'white'}}>
                                                <View style={{marginLeft:10,flex:2,alignItems:'flex-start'}}>
                                                    <Text style={{fontSize:18}}>{event.title}{!müdürlükVisibale&!change?' Müdürlüğü':null}</Text>
                                                </View>
                                                {!müdürlükVisibale&!change?
                                                    <View style={{marginRight: 10, flex: 1, alignItems: 'center'}}>
                                                        <Text style={{fontSize: 18}}>{event.personelNumber}</Text>
                                                    </View>:null
                                                }
                                                <View  style={{marginRight:10,flex:1,alignItems:'flex-end'}}>
                                                    <Text style={{fontSize:18}}>{event.personelNumber}</Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                )
                            }
                        </ScrollView>
                    </View>
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

export default PersonelNumbersPage;

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
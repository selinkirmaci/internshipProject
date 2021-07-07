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
import Box from "../Box";
import DateTimePicker from "@react-native-community/datetimepicker";
import ActivityBox from "../ActivityBox";
const {width,height} = Dimensions.get('window');

const BaşvurularPage = (props) => {

    const [kriterValue, setSelectedKriter] = React.useState(0);
    const [kriterName, setSelectedKriterName] = React.useState('Kriter');
    const [bringData, setBringData] = React.useState(false);
    const [tableName, setTableName] = React.useState(false);
    const [kriterChosen, setKriterChosen] = React.useState(false);
    const [secondParameter, setSecondParameter] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [currentData, setCurrentData] = React.useState([
    ]);
    const boxes = [
        {
            id:121,
            title: 'Mahalle',
        },
        {
            id:121,
            title: 'Müdürlük',
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
    const neighborhoods =[
        {
            title:'Aksungur'
        },
        {
            title:'Alaaddin'
        },
        {
            title:'Ataköy'
        },
        {
            title:'Atıcılar'
        },
        {
            title:'Advancık'
        },
        {
            title:'Bağlarbaşı'
        },
    ]
    const handleBringData =() => {
        setBringData(true);
        setChange(false);
    };

    const handleModalOpen =() => {
        setModalVisible(true);
    };

    const handleModalClose =(index,name) => {
        setChange(true);
        setSelectedKriterName(name);
        setSelectedKriter(index);
        setModalVisible(false);
        setKriterChosen(true);
        if(index===1)
        {
            setSecondParameter('Mahalle Seç');
            setCurrentData(neighborhoods);
        }else
        {
            setSecondParameter('Müdürlük Seç');
            setCurrentData(müdürlükler);
        }
    };


    const [startDate,setStartDate] = React.useState(new Date().getDate().toString() + "/"+(new Date().getMonth()+1).toString()+'/'+new Date().getFullYear().toString());
    const [finishDate,setFinishDate] = React.useState(new Date().getDate().toString() + "/"+(new Date().getMonth()+1).toString()+'/'+new Date().getFullYear().toString());


    const [dateStart, setDateStart] = React.useState(new Date());
    const [modeStart, setModeStart] = React.useState('date');
    const [showStart, setShowStart] = React.useState(false);

    const onChangeStart = (event, selectedDate) => {
        const currentDateStart = selectedDate || dateStart;
        setShowStart(Platform.OS === 'ios');
        setDateStart(currentDateStart);
        setStartDate(selectedDate.getDate().toString() + "/"+(currentDateStart.getMonth()+1).toString()+'/'+currentDateStart.getFullYear().toString());
        console.log(currentDateStart);
    };

    const showModeStart = (currentMode) => {
        setShowStart(true);
        setModeStart(currentMode);
    };

    const showDatepickerStart = () => {
        showModeStart('date');
    };



    const [dateFinish, setDateFinish] = React.useState(new Date());
    const [modeFinish, setModeFinish] = React.useState('date');
    const [showFinish, setShowFinish] = React.useState(false);

    const onChangeFinish = (event, selectedDate) => {
        const currentDateFinish = selectedDate || dateFinish;
        setShowFinish(Platform.OS === 'ios');
        setDateFinish(currentDateFinish);
        setFinishDate((selectedDate.getDate().toString()) + "/"+(currentDateFinish.getMonth()+1).toString()+'/'+currentDateFinish.getFullYear().toString());
    };

    const showModeFinish = (currentMode) => {
        setShowFinish(true);
        setModeFinish(currentMode);
    };

    const showDatepickerFinish = () => {
        showModeFinish('date');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <View style={{backgroundColor:'#eecf8a',elevation:10,height:height/2.5}}>
                <View style={styles.populationView}>
                    <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                        <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                        <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15,marginRight:150}}>Başvurular</Text>
                    </View>
                </View>
                <View style={{...styles.chosing,marginTop:35}}>
                    <View>
                        <View style={{flexDirection: 'row', width: 300}}>
                            <Text style={{flex: 1, alignItems: 'flex-start', fontSize: 20,textAlign:'center'}}>Başlangıç Tarihi</Text>
                            <Text style={{flex: 1, alignItems: 'flex-end', fontSize: 20,textAlign:'center'}}>Bitiş Tarihi</Text>
                        </View>
                        <View style={{flexDirection: 'row', width: 300, height: 40}}>
                            <View style={{flex: 1, borderRadius: 20, marginRight: 5}} >
                                <Button color = 'black' onPress={showDatepickerStart} title= {startDate} />
                            </View>
                            <View style={{flex: 1, borderRadius: 20, marginRight: 5}} >
                                <Button color = 'black' onPress={showDatepickerFinish} title= {finishDate} />
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <TouchableOpacity  onPress={handleModalOpen} style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/1.2,alignItems:'center',borderRadius:10}}>
                                <Text style={{fontSize:20}}>{kriterName}</Text>
                            </TouchableOpacity>
                            {kriterChosen?
                                <TouchableOpacity  onPress={handleModalOpen} style={{marginTop:10,justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/1.2,alignItems:'center',borderRadius:10}}>
                                    <Text style={{fontSize:20}}>{secondParameter}</Text>
                                </TouchableOpacity>:null
                            }
                        </View>
                        {showStart && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateStart}
                                mode={modeStart}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeStart}
                            />
                        )}
                        {showFinish && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateFinish}
                                mode={modeFinish}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeFinish}
                            />
                        )}
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

                    <TouchableOpacity  onPress={handleBringData} style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/2,alignItems:'center',borderRadius:10,marginTop:10}}>
                        <Text style={{fontSize:20}}>Verileri getir</Text>
                    </TouchableOpacity>
                    {showStart && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dateStart}
                            mode={modeStart}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeStart}
                        />
                    )}
                    {showFinish && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dateFinish}
                            mode={modeFinish}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeFinish}
                        />
                    )}
                </View>
            </View>

            {bringData?
                <View style={{marginTop:10}}>
                    {bringData&!change?
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
                                                    <Text>{event.title}</Text>
                                                </View>
                                            )
                                        }
                                    )
                                }
                            </ScrollView>
                        </View>:null
                    }
                </View>
                :null
            }
        </SafeAreaView>
    );
}

export default BaşvurularPage;

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
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
    TouchableOpacity, ScrollView, Pressable, TextInput
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
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

    const [modalVisible, setModalVisible] = React.useState(false);
    const [startDate,setStartDate] = React.useState(new Date().getDate().toString() + "/"+(new Date().getMonth()+1).toString()+'/'+new Date().getFullYear().toString());

    const [dateStart, setDateStart] = React.useState(new Date());
    const [modeStart, setModeStart] = React.useState('date');
    const [showStart, setShowStart] = React.useState(false);

    const onChangeStart = (event, selectedDate) => {
        const currentDateStart = selectedDate || dateStart;
        setShowStart(Platform.OS === 'ios');
        setDateStart(currentDateStart);
        setStartDate(selectedDate.getDate().toString() + "/"+(currentDateStart.getMonth()+1).toString()+'/'+currentDateStart.getFullYear().toString());
    };

    const showModeStart = (currentMode) => {
        setShowStart(true);
        setModeStart(currentMode);
    };

    const showDatepickerStart = () => {
        showModeStart('date');
    };
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
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:20,marginBottom:20}}>Ziyaret Detayları</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Konu</Text>
                            <TextInput style={{flex:1}} placeholder='Konu'></TextInput>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Açıklama</Text>
                            <TextInput multiline numberOfLines={4} style={{flex:1}} placeholder='Açıklama'></TextInput>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Tarih</Text>
                            <Pressable
                                style={[styles.tarihbutton]}
                                onPress={showDatepickerStart}
                            >
                                <Text style={{...styles.textStyle,color:'black'}}>{startDate}</Text>
                            </Pressable>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Tesis</Text>
                            <TextInput style={{flex:1}} placeholder='Seçinz'></TextInput>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Kurum</Text>
                            <TextInput style={{flex:1}} placeholder='Kurum'></TextInput>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{flex:1}}>Adres</Text>
                            <TextInput multiline numberOfLines={4} style={{flex:1}} placeholder='Adres'></TextInput>
                        </View>
                        {showStart?
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateStart}
                                mode={modeStart}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeStart}
                            />:null
                        }
                        <View style={{marginTop:40}}>
                            <View style={{flexDirection:'row'}}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                >
                                    <Text style={styles.textStyle}>Galeriden Seç</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                >
                                    <Text style={styles.textStyle}>Yeni Fotoğraf Çek</Text>
                                </Pressable>
                            </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Ziyareti Kaydet</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15,marginRight:40}}>Başkan Ziyaretleri</Text>
                    <FontAwesome5 name='plus' size={25} styles = {{marginLeft:20,marginRight:10}}  onPress={() => setModalVisible(true)}></FontAwesome5>

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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:height/1.2,
        width:width/1.1,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal: 10,
        marginVertical:10
    },
    tarihbutton:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft:-200,
        width:150,
        backgroundColor:'white'
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
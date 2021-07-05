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
import DateTimePicker from '@react-native-community/datetimepicker';

const {width,height} = Dimensions.get('window');

const ÖdemelerPage = (props) => {
    const [bringData, setBringData] = React.useState(false);
    const [tableName, setTableName] = React.useState(false);
    const [currentData, setCurrentData] = React.useState([
        {
          firm:'Burcu Kurçeren',
          amount: '58.376',
        },
        {
            firm:'Ayşe Satıcı',
            amount: '22.376',
        },
        {
            firm:'Kasım Öztürk',
            amount: '10.006',
        },
        {
            firm:'Teracity Bilişim',
            amount: '12.985',
        },
        {
            firm:'Diğer',
            amount: '22.985',
        },
    ]);

    const [startDate,setStartDate] = React.useState(new Date().getDate().toString() + "/"+(new Date().getMonth()-1).toString()+'/'+new Date().getFullYear().toString());
    const [finishDate,setFinishDate] = React.useState(new Date().getDate().toString() + "/"+(new Date().getMonth()-1).toString()+'/'+new Date().getFullYear().toString());


    const handleBringData =() => {
        setBringData(true);
    };
    const [dateStart, setDateStart] = React.useState(new Date(2021,7,5));
    const [modeStart, setModeStart] = React.useState('date');
    const [showStart, setShowStart] = React.useState(false);

    const onChangeStart = (event, selectedDate) => {
        const currentDateStart = selectedDate || dateStart;
        setShowStart(Platform.OS === 'ios');
        setDateStart(currentDateStart);
        setStartDate(currentDateStart.getDate().toString() + "/"+(currentDateStart.getMonth()+1).toString()+'/'+currentDateStart.getFullYear().toString());
    };

    const showModeStart = (currentMode) => {
        setShowStart(true);
        setModeStart(currentMode);
    };

    const showDatepickerStart = () => {
        showModeStart('date');
    };

    const [dateFinish, setDateFinish] = React.useState(new Date(2021,7,5));
    const [modeFinish, setModeFinish] = React.useState('date');
    const [showFinish, setShowFinish] = React.useState(false);

    const onChangeFinish = (event, selectedDate) => {
        const currentDateFinish = selectedDate || dateFinish;
        setShowFinish(Platform.OS === 'ios');
        setDateFinish(currentDateFinish);
        //setFinishDate(currentDateFinish);
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
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Ödemeler </Text>
                </View>
            </View>
            <View style={styles.chosing}>
                    <View>
                        <View style={{flexDirection: 'row', width: 300}}>
                            <Text style={{flex: 1, alignItems: 'flex-start', fontSize: 20}}>Başlangıç Tarihi</Text>
                            <Text style={{flex: 1, alignItems: 'flex-end', fontSize: 20}}>Bitiş Tarihi</Text>
                        </View>
                        <View style={{flexDirection: 'row', width: 300, height: 40}}>
                            <View style={{flex: 1, borderRadius: 20, marginRight: 5}} >
                                <Button color = 'black' onPress={showDatepickerStart} title= {startDate} />
                            </View>
                            <View style={{flex: 1, borderRadius: 20, marginRight: 5}} >
                                <Button color = 'black' onPress={showDatepickerFinish} title= {finishDate} />
                            </View>
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
                            <Text style={{fontSize:18}}>Ödenecek Firma</Text>
                        </View>
                        <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 18,textAlign:'right'}}>Tutar</Text>
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
                                                            style={{fontSize: 18}}>{event.firm}</Text>
                                                    </View>

                                                    <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
                                                        <Text style={{fontSize: 18}}>{event.amount}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    )
                                }
                            </ScrollView>
                        </View>:null

                    }
                    <View style={{flexDirection:'row',backgroundColor:'white',elevation:5,alignItems:'flex-end',marginTop:-22}}>
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

export default ÖdemelerPage;

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
        marginTop: 10,
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
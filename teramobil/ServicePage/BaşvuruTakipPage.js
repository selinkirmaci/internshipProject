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
const {width,height} = Dimensions.get('window');

const BaşvuruTakipPage = (props) => {

    const [kriterValue, setSelectedKriter] = React.useState(0);
    const [kriterName, setSelectedKriterName] = React.useState('Kriter');
    const [bringData, setBringData] = React.useState(false);
    const [tableName, setTableName] = React.useState(false);
    const [year, setYear] = React.useState('2021');
    const [month, setMonth] = React.useState('7');
    const [changed, setChange] = React.useState(false);
    const [currentData, setCurrentData] = React.useState([
        {
            name:'Hesna Filiz',
            amont:'298.869'
        },
        {
            name:'Burcu Kurçeren',
            amont:'48.869'
        },
        {
            name:'Ufuk Yurtsever',
            amont:'22.869'
        },
        {
            name:'Büşra Yıldız',
            amont:'11.869'
        },
        {
            name:'Diğer',
            amont:'1.869'
        },
    ]);



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
        }
        else if(kriterValue===2) {
            setTableName('Günler');
        }
        else if(kriterValue===3) {
            setTableName('Personel Tipi');
        }
        setBringData(true);
    };

    const boxes = [
        {
            title: 'Aylık',
        },
        {
            title: 'Günlük',
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
            <View style={{backgroundColor:'#eecf8a',elevation:5}}>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Başvuru Takip</Text>
                </View>
            </View>
            <View style={styles.chosing}>
                <View style={{marginTop: 10}}>
                    <View style={{flexDirection: 'row', width: 303}}>
                        <Text style={{flex: 1, alignItems: 'flex-start', fontSize: 20}}>Kayıt No</Text>
                        <Text style={{flex: 1, alignItems: 'flex-end', fontSize: 20}}>Yıl</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: 300, height: 40}}>
                        <TextInput onChange={() => handleChangeYear()}
                                   style={{flex: 1, borderRadius: 10, backgroundColor: 'white', marginRight: 5}}
                                   placeholder='Kayıt No' keyboardType='number-pad'></TextInput>
                        <TextInput onChange={() => handleChangeMonth()}
                                   style={{flex: 1, borderRadius: 10, backgroundColor: 'white',marginLeft:5}}
                                   placeholder='Yıl' keyboardType='number-pad' defaultValue={new Date().getFullYear().toString()}></TextInput>
                    </View>
                </View>
                <TouchableOpacity  onPress={handleBringData} style={{justifyContent:'center',height:40,backgroundColor:'white',elevation:5,width:width/2,alignItems:'center',borderRadius:10,marginTop:10,marginBottom:50}}>
                    <Text style={{fontSize:20}}>Verileri getir</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
}

export default BaşvuruTakipPage;

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
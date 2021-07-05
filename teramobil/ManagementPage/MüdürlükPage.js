import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView, TextInput
} from 'react-native';
import SearchBar from "react-native-elements";
import Animated from "react-native-reanimated";
import {FontAwesome, FontAwesome5} from "@expo/vector-icons";
import MüdürlükProfile from "./MüdürlükProfile";

const {width,height} = Dimensions.get('window');

const MüdürlükPage = (props) => {

    const [search,setSearch] = React.useState('');
    const [item,setItem] = React.useState({});


    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModelOpen = (event) => {
        setModalVisible(true);
        setItem(event);
    }
    const handleModelClose = () => {
        setModalVisible(false);
    }

    const [neighborhoods,setNeighborhoods] = React.useState([
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
    ]);
    const [filtered,setFiltered] = React.useState( [
        {
            id:121,
            title: 'Mali Hizmetler',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:165.000,
            spendMoney:60.300,
        },
        {
            id:121,
            title: 'Yazı İşleri',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:222.000,
            spendMoney:60.300,
        },
        {
            id:121,
            title: 'Bilgi İşlem',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:324.000,
            spendMoney:60.300,
        },
        {
            id:121,
            title: 'Fen İşleri',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:564.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'İnsan Kaynakları ve Eğitim',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:354.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'Destek Hizmetleri',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:245.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'Zabıta',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:234.000,
            spendMoney:60.300,
        },
        {
            id:121,
            title: 'Özel Kalem',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:764.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'Teftiş Kurulu',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:2435.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'Litera Bilişim Teknolojileri',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:2365.000,
            spendMoney:60.300,
        },{
            id:121,
            title: 'Park ve Bahçeler',
            personelNumber:38,
            müdür:'Ahmet Mehmet',
            izinliNumber:10,
            plannedMoney:2865.000,
            spendMoney:60.300,
        },

    ]);

    const serachFilter = (text) => {
        if(text)
        {
            const newData = neighborhoods.filter((item)=>{
                const itemData = item.title ? item.title.toUpperCase():''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData)>-1;
            });
            setFiltered(newData);
        }else
        {
            setFiltered(neighborhoods);
        }
        setSearch(text);
    }

    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <ImageBackground
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </ImageBackground>
            </View>
            <View style={{...styles.title,borderRadius:10}}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome5 name='bars' size={30} styles = {{marginTop:20,marginLeft:10,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>Müdürlükler</Text>
                </View>
            </View>
            <View style={styles.serachBar}>
                <FontAwesome name='search' size={20} style={{marginVertical:13,marginLeft:10}}/>
                <TextInput value = {search} onChangeText={(text)=>serachFilter(text)} placeholder="Müdürlük Ara"  style={{flex:2,marginLeft:10}}/>
            </View>
            <MüdürlükProfile item = {item} modalVisible={modalVisible} handleModelOpen={handleModelOpen} handleModelClose={handleModelClose} ></MüdürlükProfile>
            <ScrollView style={{marginTop:20}}>
                {
                    filtered.map((event,index) =>
                        {
                            return (
                                <TouchableOpacity onPress={()=>handleModelOpen(event)} style={{justifyContent:'flex-start',alignItems:'flex-start',marginHorizontal:5}}>
                                    <View style={styles.listItem}>
                                        <Text style={{marginLeft:10}}>{event.title} Müdürlüğü</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
            </ScrollView>

        </View>
    );
}

export default MüdürlükPage;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection:'column',
        flexWrap: 'wrap',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
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
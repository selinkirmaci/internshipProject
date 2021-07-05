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
    TouchableOpacity, ScrollView,
    FlatList
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MazeretModal from "../PersonelPage/MazeretModal";
import Box from "../Box";

const {width,height} = Dimensions.get('window');


const MaliPage = (props) => {

    const handleTahsilatlar = () => {
        props.navigation.navigate('TahsilatlarPage');
    };
    const handleTür = () => {
        props.navigation.navigate('TahsilatTürPage');
    };
    const handleÖdemeler = () => {
        props.navigation.navigate('ÖdemelerPage');
    };
    const handleDebt = () => {
        props.navigation.navigate('DebtPage');
    };
    const handleAmount = () => {
        props.navigation.navigate('AmountPage');
    };
    const [data, setData] = React.useState([
        {
            id:121,
            title: 'Tahsilatlar',
            icons: 'list-alt',
            handlePress: handleTahsilatlar,

        },
        {
            id:122,
            title: 'Tahsilat (Türe göre)',
            icons: 'credit-card',
            handlePress: handleTür,
        },
        {
            id:125,
            title: 'Ödemeler',
            icons: 'money-check',
            handlePress: handleÖdemeler,
        },
        {
            id:128,
            title: 'Borçlu Bakiye',
            icons: 'hand-holding-usd',
            handlePress: handleDebt,
        },
        {
            id:129,
            title: 'Bütçe',
            icons: 'level-down-alt',
            handlePress: handleAmount,
        },

    ]);
    const Item = ({ item }) => (
        <TouchableOpacity style={styles.box} onPress={item.handlePress}>
            <Box icon = {item.icons} title={item.title} style={styles.inner}></Box>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    return (
        <View style={styles.container}>
            <View style={{height:height/2.2,backgroundColor:'#eecf8a',elevation:10,width:width}}>
                <View style={styles.populationView}>
                    <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                        <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                        <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Mali İşler</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',marginTop:height/5-130}}>
                        <View style={{justifyContent:"center",alignItems:'center', height:100,width:140,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                            <Text style={{fontSize:18,textAlign:'center'}}>Vadeli</Text>
                            <Text>246.024</Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:'center', height:100,width:140,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                            <Text style={{fontSize:18,textAlign:'center'}}>Vadesiz</Text>
                            <Text>31.024</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:height/5-120}}>
                    <View style={{justifyContent:"center",alignItems:'center', height:100,width:140,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                        <Text style={{fontSize:18,textAlign:'center'}}>Valörde Bekleyen (Kredi Kartı)</Text>
                        <Text>28.024</Text>
                    </View>
                    <View style={{justifyContent:"center",alignItems:'center', height:100,width:140,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                        <Text style={{fontSize:18,textAlign:'center'}}>Verilen Çek ve Gönderme Emirleri</Text>
                        <Text>-124.024</Text>
                    </View>
                </View>
            </View>
            <View style={{position:"absolute",marginTop:285,marginLeft:60,justifyContent:"center",alignItems:'center', height:50,width:240,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                <Text style={{fontSize:20}}>Toplam Tutar: 181.815 </Text>
            </View>
            <View style={{height:height,backgroundColor:'white'}}>
                <View style={StyleSheet.absoluteFill}>
                    <Image
                        source={require('../../assets/backgroundTeraMobile.jpeg')}
                        style={{flex: 1, width: null, height: null}}>
                    </Image>
                </View>
                <View style={{margin:20,backgroundColor:'white',elevation:10,height:height/1.65,padding:10,justifyContent:'center',alignItems:'center'}}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>
    );
}

export default MaliPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
    item: {
        backgroundColor: '#eecf8a',
        height:50,
        width:280,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
    },
    box:{
        width: width/3,
        height: height/6,
        padding: 5,
        borderRadius: 40,
        marginRight:30,
        justifyContent:'center',

    },
    inner:{
        flex:1,
        borderRadius: 40,
    },
});
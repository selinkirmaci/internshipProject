import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";

const {width,height} = Dimensions.get('window');

const BelediyePage = () => {

    return (
        <View>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: height}}>
                </Image>
            </View>
            <SafeAreaView style={{flexDirection:'column',marginHorizontal:10,shadowColor:'black',padding:5}}>
                <View style={styles.populationView}>
                        <FontAwesome5 style = {{flex: 1.5,marginHorizontal:20}} size={80} name='users'></FontAwesome5>
                    <View style = {{flex: 2,flexDirection: 'column',alignItems:'center'}}>
                        <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold'}}>Nüfus</Text>
                        <Text style={{...styles.populationTitle,fontSize:30}}>310.113</Text>
                    </View>
                </View>
                <View style={styles.statView}>
                    <View style={{flexDirection:'row',marginVertical:8,alignContent:'center'}}>
                        <View style={{...styles.box}}>
                            <FontAwesome5 name='money-bill' size={35} color='#e3ad24'></FontAwesome5>
                            <Text style={{...styles.statInfo,fontSize:20,textAlign:'center',fontWeight:'bold'}}>Gelir Bütçesi</Text>
                            <Text>1.705.000</Text>
                        </View>
                        <View style={{...styles.box}}>
                            <FontAwesome5 name='money-bill-wave' color='#e3ad24' size={35}></FontAwesome5>
                            <Text style={{...styles.statInfo,fontSize:20,textAlign:'center',fontWeight:'bold'}}>Gider Bütçesi</Text>
                            <Text>2.239.998</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:8,alignContent:'center',fontWeight:'bold'}}>
                        <View style={styles.box}>
                            <FontAwesome5 name='building' color='#e3ad24' size={35}></FontAwesome5>
                            <Text style={{...styles.statInfo,fontSize:20,textAlign:'center',fontWeight:'bold'}}>Taşınmaz Sayısı</Text>
                            <Text>159.047</Text>
                        </View>
                        <View style={styles.box}>
                            <FontAwesome5 name='file' color='#e3ad24' size={35}></FontAwesome5>
                            <Text style={{...styles.statInfo,fontSize:20,textAlign:'center',fontWeight:'bold'}}>Bağımsız Sayısı</Text>
                            <Text>343.514</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.linkView}>
                    <TouchableOpacity style={{flexDirection:'row',borderBottomWidth: 1,borderColor:'black',marginHorizontal:10,marginVertical:5}}>
                        <FontAwesome5 style={{marginTop:10,flex:0.2}} name='user' color='black' size={30}></FontAwesome5>
                        <Text style={styles.listText}>Personel Sayısı</Text>
                        <View style={styles.listStat}>
                            <Text>200</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  style={{flexDirection:'row',borderBottomWidth: 1,borderColor:'black',marginHorizontal:10,marginVertical:5}}>
                        <FontAwesome5 style={{marginTop:10,flex:0.2}} name='home' color='black' size={30}></FontAwesome5>
                        <Text style={styles.listText}>Mahalle Sayısı</Text>
                        <View style={styles.listStat}>
                            <Text>356</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginVertical:5}}>
                        <FontAwesome5 style={{marginTop:10,flex:0.2}} name='hotel' color='black' size={30}></FontAwesome5>
                        <Text style={styles.listText}>Müdürlükler</Text>
                        <View style={styles.listStat}>
                            <Text>123</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default BelediyePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    populationView:{
        height: height/4.5,
        padding: 5,
        marginTop: 35,
        marginVertical:5,
        backgroundColor: 'white',
        opacity:0.8,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,

    },
    statView:{
        backgroundColor: 'white',
        height: height/2.3,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    linkView:{
        backgroundColor: 'white',
        height: height/3.5,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        justifyContent:'center',
        borderRadius:10,
    },
    populationTitle:{
        marginVertical:10,
    },
    listText:{
        flex:1,
        padding:15,
        fontSize:20,
    },
    listStat:{
        borderColor:'#f1deb3',
        borderWidth:1,
        flex:0.15,
        marginVertical:10,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statInfo:{
        marginVertical:2,
    },
    box:{
        height:130,
        width:130,
        shadowOpacity:1,
        borderRadius: 10,
        shadowColor: "black",
        backgroundColor:'white',
        flexDirection: 'column',
        padding:20,
        marginHorizontal:10,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderColor: '#e3ad24',
        justifyContent: 'center',
        alignItems:'center',
    },
});

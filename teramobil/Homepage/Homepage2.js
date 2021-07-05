import React, {useEffect} from 'react';
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
    TouchableOpacity, Animated, ScrollView, Button,
    Linking
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesome5} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ActivityBox from "../ActivityBox";

const {width,height} = Dimensions.get('window');

const Tabs = createBottomTabNavigator();

const  Homepage2 = (props,{navigation,route}) => {

    //const {  user } = props.navigation.getParam('user');

    async function loadGraphicCards() {
        const searchUrl = `https://api.collectapi.com/economy/allCurrency`;
        const response = await fetch(searchUrl);
        const htmlString = await response.text();
        console.log(htmlString);
    };


    useEffect(() => {

    });


    return (
        <View>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: height}}>
                </Image>
            </View>
            <SafeAreaView style={{flexDirection:'column',marginHorizontal:10,shadowColor:'black',padding:5}}>
                <View style={styles.populationView}>
                    <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                        <FontAwesome5 name='bars' size={20} styles = {{marginLeft:10,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                        <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>Hoşgeldiniz</Text>
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView style={{flexDirection:'column',marginHorizontal:10,shadowColor:'black',padding:5}}>
                <View style={styles.moneyView}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.tcmb.gov.tr/kurlar/today.xml')}>
                        <View style={{...styles.moneyBoxView,flexDirection:'row'}}>
                            <FontAwesome5 name = 'dollar-sign' size ={25} style={{marginRight:10}}></FontAwesome5>
                            <View>
                                <Text style={{fontSize:20}}>Dolar</Text>
                                <Text>8.6772</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.tcmb.gov.tr/kurlar/today.xml')}>
                            <View style={{...styles.moneyBoxView,flexDirection:'row'}}>
                                <FontAwesome5 name = 'euro-sign' size ={25} style={{marginRight:10}}></FontAwesome5>
                                <View>
                                    <Text style={{fontSize:20}}>Euro</Text>
                                    <Text>8.6772</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('https://www.tcmb.gov.tr/kurlar/today.xml')}>
                            <View style={{...styles.moneyBoxView,flexDirection:'row'}}>
                                <FontAwesome5 name = 'pound-sign' size ={25} style={{marginRight:10,marginLeft: 10}}></FontAwesome5>
                                <View>
                                    <Text style={{fontSize:20}}>İngiliz Sterlini</Text>
                                    <Text>8.6772</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.tcmb.gov.tr/kurlar/today.xml')}>
                            <View style={{...styles.moneyBoxView,flexDirection:'row'}}>
                                <FontAwesome5 name = 'coins' size ={25} style={{marginRight:10}}></FontAwesome5>
                                <View>
                                    <Text style={{fontSize:20}}>Altın</Text>
                                    <Text>8.6772</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.statView}>
                    <View>
                        <Text style={{...styles.populationTitle,fontSize:20,fontWeight:'bold'}}>Günün Gazeteleri</Text>

                        <ScrollView horizontal={true} pagingEnabled={true}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.ensonhaber.com/')}>
                        <View style={{flex:1,width:width/1.12}}>
                            <ImageBackground
                                resizeMode='contain'
                                source={require('../../assets/news1.jpg')}
                                style={{flex: 1, width: null, height: height/3.5,alignContent:"flex-end",justifyContent:'flex-end'}}>
                            </ImageBackground>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:5}}>ensonhaber</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => Linking.openURL('https://www.sozcu.com.tr/')}>
                            <View style={{flex:1,width:width/1.12}}>
                            <ImageBackground
                                resizeMode='contain'
                                source={require('../../assets/new3.jpg')}
                                style={{flex: 1, width: null, height:  height/3.5,alignContent:"flex-end",justifyContent:'flex-end'}}>
                            </ImageBackground>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:5}}>Sözcü</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => Linking.openURL('https://www.hurriyet.com.tr/')}>
                            <View style={{flex:1,width:width/1.12}}>
                                <ImageBackground
                                    resizeMode='contain'
                                    source={require('../../assets/news2.jpg')}
                                    style={{flex: 1, width: null, height:  height/3.5,alignContent:"flex-end",justifyContent:'flex-end'}}>
                                </ImageBackground>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:5}}>Hürriyet</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                </View>
                <View style={styles.linkView}>
                    <ScrollView horizontal={true} pagingEnabled={true}>
                        <View>
                        <Text style={{fontSize:20}}>Etkinlikler</Text>
                        <ScrollView style={{marginVertical:5,height:300,width:width/1.15,marginHorizontal:3}}>
                            <ActivityBox title='Etkinlik 1' details='Açıklama 1'></ActivityBox>
                            <ActivityBox title='Etkinlik 2' details='Açıklama 2'></ActivityBox>
                            <ActivityBox title='Etkinlik 3' details='Açıklama 3'></ActivityBox>
                            <ActivityBox title='Etkinlik 4' details='Açıklama 4'></ActivityBox>
                            <ActivityBox title='Etkinlik 5' details='Açıklama 5'></ActivityBox>
                        </ScrollView>
                        </View>
                        <View>
                            <Text style={{fontSize:20}}>Günlük Program</Text>
                            <ScrollView style={{marginVertical:5,height:300,width:width/1.15,marginHorizontal:3}}>
                                <ActivityBox title='Program 1' details='Açıklama 1'></ActivityBox>
                                <ActivityBox title='Program 2' details='Açıklama 2'></ActivityBox>
                                <ActivityBox title='Program 3' details='Açıklama 3'></ActivityBox>
                                <ActivityBox title='Program 4' details='Açıklama 4'></ActivityBox>
                                <ActivityBox title='Program 5' details='Açıklama 5'></ActivityBox>
                        </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

export default Homepage2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    populationView:{
        height: height/17,
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
        height: height/2.4,
        padding: 5,
        marginVertical:3,
        opacity:0.8,
        borderRadius:10,
        alignItems:'center'
    },
    moneyBoxView:{
        flex:1,
        width:width/3.8,
        marginHorizontal:5,
        borderColor:'#f1deb3',
        borderWidth:2,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        opacity:1,
        padding:10,
    },
    moneyView:{
        backgroundColor: 'white',
        height: height/6.5,
        padding: 5,
        marginVertical:5,
        borderRadius:10,
    },
    linkView:{
        backgroundColor: 'white',
        height: height/3,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        borderRadius:10,
    },
    populationTitle:{
        marginVertical:10,
        marginLeft:10
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

});

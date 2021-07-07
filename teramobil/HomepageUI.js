import React from 'react';
import {Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View,Dimensions,ScrollView} from 'react-native';
import Box from "./Box";
import * as Animatable from 'react-native-animatable';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


const HomepageUI = (props) => {
    const {width,height} = Dimensions.get('window');

    const handleAnasayfa = () =>{
        props.navigation.navigate('Homepage2');
    }
    const handleBelediyePress = () =>{
        props.navigation.navigate('BelediyePage');
    }
    const handleMahallePress = () =>{
        props.navigation.navigate('MahallePage');
    }
    const handlePersonelPress = () =>{
        props.navigation.navigate('PersonelPage');
    }
    const handleMaliPress = () =>{
        props.navigation.navigate('MaliPage');
    }
    const handleMüdürlükPress = () =>{
        props.navigation.navigate('MüdürlükPage');
    }
    const handleGündemPress = () =>{
        props.navigation.navigate('GündemHomepage');
    }
    const handleServicePress = () =>{
        props.navigation.navigate('ServiceHomepage');
    }
    const handleWaterPress = () =>{
        props.navigation.navigate('WaterHomepage');
    }
    const handlePolicePress = () =>{
        props.navigation.navigate('ProjectHomepage');
    }
    const handleMapPress = () =>{
        props.navigation.navigate('GündemHomepage');
    }
    const handleProjectPress = () =>{
        props.navigation.navigate('PoliceHomepage');
    }




    const boxes = [
        {
            id:121,
            title: 'Anasayfa',
            icons: 'home',
            handlePress: handleAnasayfa,

        },
        {
            id:121,
            title: 'Belediyemiz',
            icons: 'landmark',
            handlePress: handleBelediyePress,

        },
        {
            id:122,
            title: 'Personel',
            icons: 'users',
            handlePress: handlePersonelPress,

        },
        {
            id:123,
            title: 'Mali İşler',
            icons: 'money-check-alt',
            handlePress: handleMaliPress,

        },
        {
            id:124,
            title: 'Müdürlükler',
            icons: 'building',
            handlePress: handleMüdürlükPress,
        },
        {
            id:124,
            title: 'Mahalleler',
            icons: 'city',
            handlePress: handleMahallePress,
        },
        {
            id:125,
            title: 'Gündem',
            icons: 'newspaper',
            handlePress: handleGündemPress,

        },
        {
            id:126,
            title: 'Hizmet Masası',
            icons: 'headset',
            handlePress: handleServicePress,

        },
        {
            id:128,
            title: 'Haritalar',
            icons: 'map-marked-alt'

        },
        {
            id:129,
            title: 'Yatırım/Proje',
            icons: 'handshake',
            handlePress: handleProjectPress,

        },
        {
            id:130,
            title: 'Zabıta',
            icons: 'user-tie',
            handlePress: handlePolicePress,

        },
        {
            id:131,
            title: 'Su - İş Emri',
            icons: 'suitcase',
            handlePress: handleWaterPress,

        },
    ];
    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <ImageBackground
                    source={require('../assets/whiteBackground.jpg')}
                    style={{flex: 1, width: null, height: null}}>
                </ImageBackground>
            </View>
            <View style={{flexDirection:'row'}}>
                 <Text style={{textAlign:'center',fontWeight:'bold',fontSize:23,fontStyle:'italic',marginRight:3}}>Nasıl yardımcı olabilirim?</Text>
                <FontAwesome5Icon style = {{marginLeft:20}} name='times' size={27} onPress={()=>{props.navigation.closeDrawer();}}></FontAwesome5Icon>
            </View>

                {
                    boxes.map((event,index) =>
                        {
                            return (
                                <TouchableOpacity onPress={event.handlePress} style={styles.box}>
                                    <Box icon = {event.icons} index = {index } title={event.title} style={styles.inner}></Box>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
        </View>
    )
}
export default HomepageUI;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection:'row',
        flexWrap: 'wrap',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
        justifyContent:'center'
    },
    box:{
        width: '45%',
        height: '16%',
        padding: 5,
        borderRadius: 40,
    },
    inner:{
        flex:1,
        borderRadius: 40,
    },

});
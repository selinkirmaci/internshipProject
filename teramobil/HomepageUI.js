import React from 'react';
import {Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View,Dimensions} from 'react-native';
import Box from "./Box";
import * as Animatable from 'react-native-animatable';






const HomepageUI = (props) => {
    const {width,height} = Dimensions.get('window');


    const handleBelediyePress = () =>{
        props.navigation.navigate('BelediyePage');
    }

    const boxes = [
        {
            id:121,
            title: 'Belediyemiz',
            icons: 'landmark',
            handlePress: handleBelediyePress,

        },
        {
            id:122,
            title: 'Personel',
            icons: 'users'

        },
        {
            id:123,
            title: 'Mali İşler',
            icons: 'money-check-alt'

        },
        {
            id:124,
            title: 'Mahalleler',
            icons: 'home'

        },
        {
            id:125,
            title: 'Gündem',
            icons: 'newspaper'
        },
        {
            id:126,
            title: 'Hizmet Masası',
            icons: 'headset'

        },
        {
            id:128,
            title: 'Haritalar',
            icons: 'map-marked-alt'

        },
        {
            id:129,
            title: 'Yatırım/Proje',
            icons: 'handshake'

        },
        {
            id:130,
            title: 'Zabıta',
            icons: 'user-tie'

        },
        {
            id:131,
            title: 'Su - İş Emri',
            icons: 'suitcase'

        },
    ];
    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <ImageBackground
                    source={require('../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                    <Text  style={{marginVertical:height/2.2,marginLeft:width/5,fontSize:50,opacity:0.3,fontWeight:'bold',fontStyle:'italic'}}>TeraMobil</Text>
                </ImageBackground>
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
    },
    box:{
        width: '50%',
        height: '20%',
        padding: 5,
        borderRadius: 40,
    },
    inner:{
        flex:1,
        borderRadius: 40,
    },

});
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
    TouchableOpacity, ScrollView
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Box from "../Box";
const {width,height} = Dimensions.get('window');

const İzinliPage = (props) => {
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
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>İzinli Personel</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default İzinliPage;

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
    populationView:{
        height: height/17,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
    },
});
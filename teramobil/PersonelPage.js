import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const {width,height} = Dimensions.get('window');

const Item = ({ item }) => (
    <TouchableOpacity onPress={item.handlePress}>
        <View style={styles.item}>
            <FontAwesome5 name={item.icon} size={30}></FontAwesome5>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </TouchableOpacity>
);

const PersonalPage = (props) => {


    const handlePersonelNumbersPage = () =>{
        props.navigation.navigate('PersonelNumbersPage');
    };
    const handlePersonelMaliyetPage = () =>{
        props.navigation.navigate('PersonelMaliyetPage');
    };
    const handleMüdürlükSayılarıPage = () =>{
        props.navigation.navigate('MüdürlükPersonelSayılarıPage');
    };
    const handlePersonelAramaPage = () =>{
        props.navigation.navigate('PersonelAramaPage');
    };
    const handleİzinliPage = () =>{
        props.navigation.navigate('İzinliPage');

    };
    const handleMazeretPage = () =>{
        props.navigation.navigate('MazaretPage');

    };
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Personel Sayıları',
            icon: 'user-friends',
            handlePress:handlePersonelNumbersPage,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53bb28ba',
            title: 'Personel Maliyetleri',
            icon: 'money-bill-wave-alt',
            handlePress: handlePersonelMaliyetPage,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3abb28ba',
            title: 'Personel Arama',
            icon: 'search',
            handlePress: handlePersonelAramaPage,
        },
        {
            id: 'bd7acbea-c1-46c2-aed5-3a3abb28ba',
            title: 'Mazeret Değerlendirme',
            icon: 'file-signature',
            handlePress:handleMazeretPage,
        },
    ];



    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (

        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <View style={styles.populationView}>
                <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Personel</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                style={{marginTop:100}}
            />
        </SafeAreaView>
    );
}

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
        elevation:5,
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
});

export default PersonalPage;
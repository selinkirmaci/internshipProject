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
        <View style={{...styles.item,backgroundColor:'#eecf8a'}}>
            <FontAwesome5 name={item.icon} size={30}></FontAwesome5>
            <Text style={{...styles.title,marginLeft:20}}>{item.title}</Text>
        </View>
    </TouchableOpacity>
);


const ServiceHomepage = (props) => {
    const handleBaşvuruPress = () =>{
        props.navigation.navigate('BaşvurularPage');
    }
    const handleTakipPress = () =>{
        props.navigation.navigate('BaşvuruTakipPage');
    }
    const handleVarakaPress = () =>{
        props.navigation.navigate('ZabıtaVarakalarıPage');
    }


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Başvurular',
            icon: 'user-friends',
            handlePress: handleBaşvuruPress,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53bb28ba',
            title: 'Başvuru Takip',
            icon: 'folder-open',
            handlePress: handleTakipPress,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3abb28ba',
            title: 'Zabıta Varakaları',
            icon: 'user-tie',
            handlePress: handleVarakaPress,
        },
    ];



    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (

        <SafeAreaView style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('../../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </Image>
            </View>
            <View style={styles.populationView}>
                <View style = {{flexDirection: 'row',alignItems:'center'}}>
                    <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Hizmet Masası</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{marginTop:30}}
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
        flexDirection:'row',
        alignItems:'center',
        height:height/4,
        justifyContent:'center',
        width:width/1.05,
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

export default ServiceHomepage;
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

const {width,height} = Dimensions.get('window');

const MahallePage = (props) => {

    const [search,setSearch] = React.useState('');

    const [neighborhoods,setNeighborhoods] = React.useState([
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
    ]);
    const [filtered,setFiltered] = React.useState([
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
        {
            neighborhood:'Aksungur'
        },
        {
            neighborhood:'Alaaddin'
        },
        {
            neighborhood:'Ataköy'
        },
        {
            neighborhood:'Atıcılar'
        },
        {
            neighborhood:'Advancık'
        },
        {
            neighborhood:'Bağlarbaşı'
        },
    ]);

    const serachFilter = (text) => {
        if(text)
        {
            const newData = neighborhoods.filter((item)=>{
                const itemData = item.neighborhood ? item.neighborhood.toUpperCase():''.toUpperCase();
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
                    source={require('../assets/backgroundTeraMobile.jpeg')}
                    style={{flex: 1, width: null, height: null}}>
                </ImageBackground>
            </View>
            <View style={{...styles.title,borderRadius:10}}>
                <View style={{flexDirection:'row'}}>
                     <FontAwesome5 name='bars' size={30} styles = {{marginTop:20,marginLeft:10,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                    <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>MAHALLELER</Text>
                </View>
                <Text style={{fontSize:18,marginTop:5,marginLeft:10}}>Mevcut Mahalle Sayısı: 356</Text>
            </View>
            <View style={styles.serachBar}>
                <FontAwesome name='search' size={20} style={{marginVertical:13,marginLeft:10}}/>
                <TextInput value = {search} onChangeText={(text)=>serachFilter(text)} placeholder="Mahalle Ara"  style={{flex:2,marginLeft:10}}/>
            </View>
            <ScrollView style={{marginTop:20}}>
            {
                filtered.map((event,index) =>
                    {
                        return (
                                <TouchableOpacity style={{justifyContent:'flex-start',alignItems:'flex-start',marginHorizontal:5}}>
                                    <View style={styles.listItem}>
                                         <Text style={{marginLeft:10}}>{event.neighborhood}</Text>
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

export default MahallePage;

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
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
import MazeretModal from "../MazeretModal";
import Box from "../Box";

const {width,height} = Dimensions.get('window');


const GündemHomepage = (props) => {
    const handleActivityPress = () =>{
        props.navigation.navigate('ActivityPage');
    }
    const handleAppoinmentPress = () =>{
        props.navigation.navigate('AppoinmentPage');
    }
    const handleMessagePress = () =>{
        props.navigation.navigate('MessageToMayorPage');
    }
    const handleDailyProgPress = () =>{
        props.navigation.navigate('DailyProgramPage');
    }
    const handleNotesPress = () =>{
        props.navigation.navigate('NotesPage');
    }
    const handleVisitsPage = () =>{
        props.navigation.navigate('MayorVisitsPage');
    }


    const [data, setData] = React.useState([
        {
            id:121,
            title: 'Etkinlikler',
            icons: 'theater-masks',
            handlePress: handleActivityPress,

        },
        {
            id:122,
            title: 'Randevular',
            icons: 'file-signature',
            handlePress: handleAppoinmentPress,
        },
        {
            id:125,
            title: 'Başkana Mesaj',
            icons: 'comment',
            handlePress: handleMessagePress,
        },
        {
            id:128,
            title: 'Günlük Program',
            icons: 'calendar-day',
            handlePress: handleDailyProgPress,
        },
        {
            id:129,
            title: 'Notlarım',
            icons: 'sticky-note',
            handlePress: handleNotesPress,
        },
        {
            id:130,
            title: 'Başkanın Ziyaretleri',
            icons: 'bus-alt',
            handlePress: handleVisitsPage,
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
             <View style={{height:height/4,backgroundColor:'#eecf8a',elevation:10,width:width}}>
                    <View style={styles.populationView}>
                        <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                            <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                            <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Gündem</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:height/5-130}}>
                        <View style={{justifyContent:"center",alignItems:'center', height:50,width:width/1.2,marginHorizontal:10,borderRadius:20}}>
                            <Text style={{fontSize:25,textAlign:'center'}}>{new Date().getDate().toString()}/{new Date().getMonth().toString()}/{new Date().getFullYear().toString()}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:height/5-140}}>
                        <View style={{justifyContent:"center",alignItems:'center', height:50,width:width/1.2,marginHorizontal:10,borderRadius:20}}>
                            <Text style={{fontSize:18,textAlign:'center'}}>Günün Alıntısı: ...</Text>
                        </View>
                    </View>
                </View>
            <View style={{height:height/6,width:width,backgroundColor:'white',elevation:10,marginTop:10,alignItems:'center'}}>
                <Text style={{fontSize:20,textDecorationLine:'underline'}}>Duyurular</Text>
                <ScrollView horizontal={true} pagingEnabled={true}  persistentScrollbar={true} >
                    <View style={{height:height/6,width:width,alignItems:'center',marginTop:30}}>
                        <Text>Duyuru 1</Text>
                    </View>
                    <View style={{height:height/6,width:width,alignItems:'center',marginTop:30}}>
                        <Text>Duyuru 2</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{height:height,backgroundColor:'white'}}>
                <View style={StyleSheet.absoluteFill}>
                    <Image
                        source={require('../../assets/backgroundTeraMobile.jpeg')}
                        style={{flex: 1, width: null, height: null}}>
                    </Image>
                </View>
                <View style={{margin:15,backgroundColor:'white',elevation:10,height:height/2,padding:10,justifyContent:'center',alignItems:'center'}}>
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

export default GündemHomepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
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
        height: height/7,
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
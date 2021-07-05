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
import Box from "./Box";
import MüdürlükProfile from "./ManagementPage/MüdürlükProfile";
import MazeretModal from "./MazeretModal";
const {width,height} = Dimensions.get('window');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-ae5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c05-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '5894a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


const MazaretPage = (props) => {

    const [item,setItem] = React.useState({});


    const [modalVisible, setModalVisible] = React.useState(false);

    const [data, setData] = React.useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Mazeret1',
            date: '12.02.2020'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Mazeret2',
            date: '12.02.2021'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Mazeret3',
            date: '13.02.2020'
        },
        {
            id: 'bd7acbea-c1b1-46c2-ae5-3ad53abb28ba',
            title: 'Mazeret4',
            date: '14.02.2020'
        },
        {
            id: '3ac68afc-c05-48d3-a4f8-fbd91aa97f63',
            title: 'Mazeret5',
            date: '12.03.2020'
        },
        {
            id: '5894a0f-3da1-471f-bd96-145571e29d72',
            title: 'Mazeret6',
            date: '12.02.2120'
        },
    ]);

    const handleModelOpen = (event) => {
        setModalVisible(true);
        setItem(event);
    }
    const handleModelClose = () => {
        setModalVisible(false);
    }

    const [sortingIcon,setSortingIcon] = React.useState('sort-numeric-down');
    const [sortingAlpIcon,setSortingAlpIcon] = React.useState('sort-alpha-down');

    const Item = ({ item }) => (
        <TouchableOpacity onPress={()=>handleModelOpen(item)}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={{...styles.title,fontSize:15}}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleSorting =() => {
        if(sortingIcon==='sort-numeric-down')
        {
            setData(data.sort((a, b) => b.date.localeCompare(a.date)));

            setSortingIcon('sort-numeric-up');
        }else
        {
            setData(data.sort((a, b) => a.date.localeCompare(b.date)));
            setSortingIcon('sort-numeric-down');
        }
    };
    const handleAlpSorting =() => {
        if(sortingAlpIcon==='sort-alpha-down')
        {
            setData(data.sort((a, b) => b.title.localeCompare(a.title)));
            setSortingAlpIcon('sort-alpha-up');
        }else
        {
            setData(data.sort((a, b) => a.title.localeCompare(b.title)));
            setSortingAlpIcon('sort-alpha-down');
        }
    };
    const renderItem = ({ item }) => (
        <Item item={item} />
    );


    return (
        <View style={styles.container}>
            <MazeretModal item = {item} modalVisible={modalVisible} handleModelOpen={handleModelOpen} handleModelClose={handleModelClose} ></MazeretModal>
            <View style={{height:height/3,backgroundColor:'#eecf8a',elevation:10,width:width}}>
                <View style={styles.populationView}>
                    <View style = {{flex: 2,flexDirection: 'row',alignItems:'center'}}>
                        <FontAwesome5 name='bars' size={25} styles = {{marginLeft:20,marginRight:10}} onPress={()=>{props.navigation.openDrawer();}}></FontAwesome5>
                        <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Mazeret Değerlendirme</Text>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:20,marginTop:30}}>Toplam Mazeret Sayısı: {data.length}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:height/3-170}}>
                    <TouchableOpacity onPress={handleSorting}>
                        <View style={{justifyContent:"center",alignItems:'center', height:40,width:40,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                            <FontAwesome5 name={sortingIcon} size={20}></FontAwesome5>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAlpSorting}>
                        <View style={{justifyContent:"center",alignItems:'center', height:40,width:40,backgroundColor:'white',marginHorizontal:10,elevation:10,borderRadius:20}}>
                            <FontAwesome5 name={sortingAlpIcon} size={20}></FontAwesome5>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height:height,backgroundColor:'white'}}>
                <View style={StyleSheet.absoluteFill}>
                    <Image
                        source={require('../assets/backgroundTeraMobile.jpeg')}
                        style={{flex: 1, width: null, height: null}}>
                    </Image>
                </View>
                <View style={{margin:20,backgroundColor:'white',elevation:10,height:height/1.65,padding:10,justifyContent:'center',alignItems:'center'}}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    );
}

export default MazaretPage;

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
});
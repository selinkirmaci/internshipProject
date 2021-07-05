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
import Box from "./Box";
const {width,height} = Dimensions.get('window');

const MüdürlükPersonelSayılarıPage = (props) => {

    const [kriterValue, setSelectedKriter] = React.useState(0);
    const [müdürlükValue, setSelectedMüdürlük] = React.useState(0);

    const [kriterName, setSelectedKriterName] = React.useState('Müdürlükler');
    const [müdürlükName, setSelectedMüdürlükName] = React.useState('Müdürlükler');



    const [modalVisible, setModalVisible] = React.useState(false);

    const handleModalOpen =() => {
        setModalVisible(true);
    };
    const handleModalClose =(index,name) => {
        setSelectedKriterName(name);
        setSelectedKriter(index);
        setModalVisible(false);
    };

    const [modalVisibleMüdürlük, setModalVisibleMüdürlük] = React.useState(false);

    const handleModalOpenMüdürlük =() => {
        setModalVisibleMüdürlük(true);
    };
    const handleModalCloseMüdürlük =(index,name) => {
        setModalVisibleMüdürlük(false);
        setSelectedMüdürlükName(name);
        setSelectedMüdürlük(index);
    };

    const müdürlükler = [
        {
            id:121,
            title: 'Mali Hizmetler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Yazı İşleri',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Bilgi İşlem',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Fen İşleri',
            personelNumber:38,
        },{
            id:121,
            title: 'İnsan Kaynakları ve Eğitim',
            personelNumber:38,
        },{
            id:121,
            title: 'Destek Hizmetleri',
            personelNumber:38,
        },{
            id:121,
            title: 'Zabıta',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Özel Kalem',
            personelNumber:38,
        },{
            id:121,
            title: 'Teftiş Kurulu',
            personelNumber:38,
        },{
            id:121,
            title: 'Litera Bilişim Teknolojileri',
            personelNumber:38,
        },{
            id:121,
            title: 'Park ve Bahçeler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Mali Hizmetler',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Yazı İşleri',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Bilgi İşlem',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Fen İşleri',
            personelNumber:38,
        },{
            id:121,
            title: 'İnsan Kaynakları ve Eğitim',
            personelNumber:38,
        },{
            id:121,
            title: 'Destek Hizmetleri',
            personelNumber:38,
        },{
            id:121,
            title: 'Zabıta',
            personelNumber:38,
        },
        {
            id:121,
            title: 'Özel Kalem',
            personelNumber:38,
        },{
            id:121,
            title: 'Teftiş Kurulu',
            personelNumber:38,
        },{
            id:121,
            title: 'Litera Bilişim Teknolojileri',
            personelNumber:38,
        },{
            id:121,
            title: 'Park ve Bahçeler',
            personelNumber:38,
        },
    ];

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
                    <Text style={{...styles.populationTitle,fontSize:30,fontWeight:'bold',marginLeft:15}}>Müdürlük Personel Sayıları</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',elevation:5}}>
                <View style={{marginLeft:10,flex:1,alignItems:'flex-start'}}>
                    <Text style={{fontSize:18}}>Müdürlük İsimleri</Text>
                </View>
                <View  style={{marginRight:10,flex:1,alignItems:'center'}}>
                    <Text style={{fontSize:18}}>Personel Sayısı</Text>
                </View>
                <View  style={{marginRight:10,flex:1,alignItems:'flex-end'}}>
                    <Text style={{fontSize:18}}>İzinli Sayısı</Text>
                </View>
            </View>
            <View style={{height:520}}>
                <ScrollView contentContainerStyle={{backgroundColor:'white',marginTop:20}}>
                    {
                        müdürlükler.map((event,index) =>
                            {
                                return (
                                    <View style={{marginTop:5,flexDirection:'row',borderBottomWidth:1}}>
                                        <View style={{marginLeft:10,flex:1,alignItems:'flex-start'}}>
                                            <Text style={{fontSize:18}}>{event.title}</Text>
                                        </View>
                                        <View  style={{marginRight:10,flex:1,alignItems:'center'}}>
                                            <Text style={{fontSize:18}}>{event.personelNumber}</Text>
                                        </View>
                                        <View  style={{marginRight:10,flex:1,alignItems:'flex-end'}}>
                                            <Text style={{fontSize:18}}>{event.personelNumber}</Text>
                                        </View>
                                    </View>
                                )
                            }
                        )
                    }
                </ScrollView>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',elevation:5,alignItems:'flex-end',marginTop:20}}>
                <View style={{marginLeft:10,flex:1,alignItems:'flex-start'}}>
                    <Text style={{fontSize:18}}>Toplam</Text>
                </View>
                <View  style={{marginRight:10,flex:1,alignItems:'flex-end'}}>
                    <Text style={{fontSize:18}}>129</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MüdürlükPersonelSayılarıPage;

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
    title: {
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
    },
    populationView:{
        height: height/9,
        padding: 5,
        marginVertical:5,
        opacity:0.8,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
    },

});
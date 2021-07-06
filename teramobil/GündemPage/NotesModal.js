import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Dimensions,
    ImageBackground,
    Image,
    ScrollView, Button, Picker, TextInput
} from "react-native";

const {width,height} = Dimensions.get('window');

const NotesModal = (props) => {
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
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedNeighborhood, setNeighborhood] = useState("");


    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                props.handleModelClose();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{fontSize:18,textDecorationLine:'underline'}}>Müdürlük</Text>
                    <View>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 200,alignItems:'center',justifyContent:'center'}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {
                                müdürlükler.map((event,index) =>
                                    {
                                        return (
                                            <Picker.Item label={event.title} value={event.title}></Picker.Item>
                                        )
                                    }
                                )
                            }
                        </Picker>
                    </View>
                    <Text style={{fontSize:18,textDecorationLine:'underline'}}>Mahalle</Text>
                    <View>
                        <Picker
                            selectedValue={selectedNeighborhood}
                            style={{ height: 50, width: 200,alignItems:'center',justifyContent:'center' }}
                            onValueChange={(itemValue, itemIndex) => setNeighborhood(itemValue)}
                        >
                            {
                                neighborhoods.map((event,index) =>
                                    {
                                        return (
                                            <Picker.Item label={event.neighborhood} value={event.neighborhood}></Picker.Item>
                                        )
                                    }
                                )
                            }
                        </Picker>
                    </View>
                    <Text style={{fontSize:18,margin:5}}>Başlık</Text>
                    <TextInput style={{width:180,borderWidth:2,margin:5,padding:3}} placeholder='Başlık'></TextInput>
                    <Text style={{fontSize:18,margin:10}}>Açıklama</Text>
                    <TextInput style={{width:180,borderWidth:2,margin:5,padding:3}} placeholder='Açıklama'></TextInput>

                    <View style={{flexDirection:'row'}}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={props.handleModelClose}
                        >
                            <Text style={styles.textStyle}>Verileri Getir</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={props.handleModelClose}
                        >
                            <Text style={styles.textStyle}>İptal</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: height/1.8,
        width: width/1.2,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:100,
        marginHorizontal:5,
    },
    buttonClose: {
        backgroundColor: "#eecf8a",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:18,
    }
});

export default NotesModal;
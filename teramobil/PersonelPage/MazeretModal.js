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
    ScrollView
} from "react-native";

const {width,height} = Dimensions.get('window');

const MazeretModal = (props) => {


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                props.handleModelClose();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView contentContainerStyle={{justifyContent:'center'}} persistentScrollbar={true} horizontal={true} pagingEnabled={true}>
                        <View style={{width:width/1.2,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20}}>Mazeret Değerlendirme</Text>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Sicil</Text>
                                <Text style={{flex:1}}>Unvansız</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Başlangıç Tarihi</Text>
                                <Text style={{flex:1}}>24.05.2017</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Bitiş Tarihi</Text>
                                <Text style={{flex:1}}>24.05.2017</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Mazeret Tipi</Text>
                                <Text style={{flex:1}}>Görevlendirme</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Mazeret Alt Tipi</Text>
                                <Text style={{flex:1}}>Hastalık</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Araç</Text>
                                <Text style={{flex:1}}>Bilgi Yok</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Açıklama</Text>
                                <Text style={{flex:1}}>No comment</Text>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={props.handleModelClose}
                            >
                                <Text style={styles.textStyle}>Kapat</Text>
                            </Pressable>
                        </View>
                        <View style={{width:width/1.2,justifyContent:'center',alignItems:'center',marginLeft:-13}}>
                            <Text style={{fontSize:20}}>Mazeret Değerlendirme Bilgileri</Text>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Değerlendiren</Text>
                                <Text style={{flex:1}}>Erdem Hakdağlı</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Değ Tarihi</Text>
                                <Text style={{flex:1}}>24.05.2017</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Durum</Text>
                                <Text style={{flex:1}}>Değerlendirilmemiş</Text>
                            </View>
                            <View style={{flexDirection:'row',marginHorizontal:15,padding:8}}>
                                <Text style={{flex:1}}>Açıklama</Text>
                                <Text style={{flex:1}}>Bilgi Yok</Text>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={props.handleModelClose}
                            >
                                <Text style={styles.textStyle}>Kapat</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
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

export default MazeretModal;
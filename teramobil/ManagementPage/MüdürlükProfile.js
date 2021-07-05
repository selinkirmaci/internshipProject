import React, { useState } from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, ImageBackground,Image} from "react-native";

const {width,height} = Dimensions.get('window');

const MüdürlükProfile = (props) => {


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
                        <Image
                            source={require('../../assets/user.jpg')}
                            style={{flex: 0.5, width: 500, height: 500}}
                            resizeMode='contain'>
                        </Image>
                        <Text style={styles.modalText}>{props.item.title} Müdürlüğü</Text>
                        <Text style={{...styles.modalText,fontSize:15}}>{props.item.müdür}</Text>
                        <View style={{flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'center',borderBottomWidth:1,borderTopWidth:1}}>
                                <Text style={{padding:5}}>Planlanan Bütçe</Text>
                                <Text  style={{marginBottom:5}}>{props.item.plannedMoney}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',borderBottomWidth:1,borderTopWidth:1}}>
                                <Text style={{padding:5}}>Harcanan Bütçe</Text>
                                <Text style={{marginBottom:5}}>{props.item.spendMoney}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:10,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:50,flexDirection:'row',marginBottom:5,marginTop:20}}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text style={{padding:5}}>Personel Sayısı</Text>
                            </View>
                            <View style={{flex:0.7,alignItems:'center'}}>
                                <Text style={{padding:5}}>{props.item.personelNumber}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:10,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:50,flexDirection:'row',marginBottom:15,marginTop:20}}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text style={{padding:5}}>İzinli Sayısı</Text>
                            </View>
                            <View style={{flex:0.7,alignItems:'center'}}>
                                <Text style={{padding:5}}>{props.item.izinliNumber}</Text>
                            </View>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={props.handleModelClose}
                        >
                            <Text style={styles.textStyle}>Kapat</Text>
                        </Pressable>
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
        height: height/1.3,
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
        width:100
    },
    buttonClose: {
        backgroundColor: "#2196F3",
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

export default MüdürlükProfile;
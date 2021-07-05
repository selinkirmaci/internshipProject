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
    ScrollView, TouchableOpacity
} from "react-native";

const {width,height} = Dimensions.get('window');


const PersonelProfile = (props) => {
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
                    {props.item.gender==='woman'?
                        <Image
                            source={require('../../assets/womanWorker.png')}
                            style={{flex: 0.4, width: 500, height: 500}}
                            resizeMode='contain'>
                        </Image>:
                        <Image
                            source={require('../../assets/user.jpg')}
                            style={{flex: 0.6, width: 500, height: 500}}
                            resizeMode='contain'>
                        </Image>
                    }
                    <Text style={styles.modalText}>{props.item.name} {props.item.surname}</Text>
                    <Text style={{...styles.modalText,fontSize:15}}>{props.item.müdürlük}</Text>
                    <Text style={{...styles.modalText,fontSize:15}}>{props.item.job}</Text>

                    <View style={{height:300}}>
                    <ScrollView contentContainerStyle={{width:width/1.2,height:380,marginTop:10}}>
                        <View style={{marginTop:10,marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Cep Telefonu</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.phone}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Mail Adresi</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.email}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Eğitim Durumu</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.education}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Adres</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.address}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>İzin Durumu</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.izinStatus}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Doğum Yılı</Text>
                            </View>
                            <View style={{flex:0.7,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.birthYear}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>İşe Giriş Tarihi</Text>
                            </View>
                            <View style={{flex:0.7,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.startDateJob}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:5,borderRadius:10,alignItems:'center',backgroundColor:'white',elevation:5,height:40,flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:1,alignItems:'flex-start',marginLeft:10}}>
                                <Text>Büro</Text>
                            </View>
                            <View style={{flex:0.7,alignItems:'flex-end'}}>
                                <Text style={{padding:5}}>{props.item.office}</Text>
                            </View>
                        </View>
                    </ScrollView>
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
        height: height/1.2,
        width: width/1.1,
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
        marginBottom: 5,
        textAlign: "center",
        fontSize:20,
    }
});

export default PersonelProfile;
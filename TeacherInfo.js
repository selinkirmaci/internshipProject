import React, { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    Button,
    ImageBackground
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MakeACall from "./MakeACall";

export default function TeacherInfo ({navigation, route}) {
    const {Item} = route.params;

    return (
    <View style={{flex: 1}}>
        <View style={styles.container}>
            <ImageBackground  source={require('../trial/assets/background2.png')} style={styles.image}>
                <Text style = {styles.info2}>{Item.title}</Text>
                <Text style = {styles.info2}>{Item.email}</Text>
            </ImageBackground>
        </View>
        <View style={{flexGrow: 1.5, backgroundColor: 'white', alignItems: 'center'}}>
            <Image
                source={require('./assets/man.png')}
                style={{
                    position: 'absolute',
                    top: -48,
                    height: 100,
                    width: 100}}
            />
            <View style={styles.bottomview}>
                <Text style = {styles.info3}>{Item.university}</Text>
            </View>
            <View style={styles.bottomview}>
                <Text style = {styles.info3}>Ana Dal: {Item.major}</Text>
            </View>
            <View style={styles.bottomview}>
                <Text style = {styles.info3}>Öğrenci Sayısı: {Item.currentStudentNumber}</Text>
            </View>
            <View style={styles.bottomview}>
                <Text style = {styles.info3}>Ücret: {Item.salary} TL</Text>
            </View>
            <MakeACall phone = {Item.phone}/>

        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flexDirection: 'column',
        flex: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    item2: {
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    info: {
        flex: 1,
        top: 90,
        textAlign: 'center',
        fontSize: 20,
        color : 'white',

    },
    info2: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color : 'white',
        top:5,

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    info3: {
        textAlign: 'center',
        fontSize: 20,
        color: 'skyblue'
    },
    bottomview: {
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "skyblue",
        width: '80%',
        marginBottom: 20,
        top: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tinyLogo: {
        marginVertical: 8,
        marginHorizontal: 16,
        width: 100,
        height: 100,
    },
});

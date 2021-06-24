import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image,View,ImageBackground } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import {createDrawerNavigator} from "@react-navigation/drawer";
import SignUp from "./SignUp";
import DrawerFile from "./Drawer";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Abuzer Çakallı",
        major: 'Matematik',
        university: 'Uludağ Üniversitesi',
        salary: '1200',
        currentStudentNumber: 20,
        email: 'name@gmail.com',
        phone: "05324568308",
        rating: 4,
        gender: "man",

    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Burcu Öz",
        major: 'Türkçe',
        university: 'Sabancı Üniversitesi',
        salary: '2345',
        currentStudentNumber: 12,
        email: 'name@gmail.com',
        phone: "05325876158",
        rating: 3,
        gender: "woman",

    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "David Davenport",
        major: 'Bilgisayar',
        university: 'Uludağ Üniversitesi',
        salary: '123',
        currentStudentNumber: 15,
        email: 'name@gmail.com',
        phone: "05322778757",
        rating: 5,
        gender: "man",

    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-ad53abb28ba",
        title: "Avni Koç",
        major: 'Tarih',
        university: 'ODTÜ',
        salary: '786',
        currentStudentNumber: 34,
        email: 'name@gmail.com',
        phone: "05324568308",
        rating: 3,
        gender: "man",

    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb8ba",
        title: "Özcan Öztürk",
        major: 'Coğrafya',
        university: 'Boğaziçi Üniversitesi',
        salary: '3467',
        currentStudentNumber: 343,
        email: 'name@gmail.com',
        phone: "05324568308",
        rating: 4,
        gender: "man",

    },
    {
        id: "bd7acbea-c11-46c2-aed5-3ad53abb28ba",
        title: "Uğur Doğrusöz",
        major: 'Matematik',
        university: 'Bilkent Üniversitesi',
        salary: '1200',
        currentStudentNumber: 56,
        email: 'name@gmail.com',
        phone: "05324568308",
        rating: 1,
        gender: "man",

    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item2, backgroundColor]}>
        <Image
            style={styles.tinyLogo}
            source={require('./assets/man.png')}
            resizeMode="contain"
            resizeMethod="resize"
        />
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.info, textColor]}>{item.title}</Text>
            <Text style={[styles.info, textColor]}>{item.major}</Text>
            <Text style={[styles.info, textColor]}>Rating: {item.rating}/5</Text>

        </TouchableOpacity>

    </TouchableOpacity>
);


export default function Homepage ({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const Drawer = createDrawerNavigator();


    const handlePress = (item) =>{
        setSelectedId(item.id);
        navigation.navigate("TeacherInfo",{Item: item});
        //alert("WORKS!");
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? 'white' : "white";
        const color = item.id === selectedId ? 'skyblue' : 'black';

        return (
            <Item
                item={item}
                onPress={() => handlePress(item)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        /*
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>

         */

    <View style={styles.container}>
        <ImageBackground  source={require('../trial/assets/background2.png')} style={styles.image}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },
    item: {
        flexDirection: 'column',
        flex: 1,
        marginLeft:20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    item2: {
        flexDirection: 'row',
        flex: 0.5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 150,
    },
    title: {
        fontSize: 32,
    },
    info: {
        flex: 2,
        textAlign: 'left',
        fontSize: 15,
        padding: 2,
    },
    info2: {
        flex: 1,
        textAlign: 'left',
        fontSize: 20,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        top: 5,
    },
    star: {
        width: 15,
        height: 15,
        top: 5,
    },
});

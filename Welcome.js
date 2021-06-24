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
    ImageBackground,
    Button
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

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
        university: 'Uludağ Üniversitesi',
        salary: '1200',
        currentStudentNumber: 20,
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
        salary: '1200',
        currentStudentNumber: 20,
        email: 'name@gmail.com',
        phone: "05322778757",
        rating: 5,
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


export default function Welcome ({navigation}) {
    const [selectedId, setSelectedId] = useState(null);


    const handlePress = () =>{
        navigation.navigate("Homepage");
    }
    const handleSignUp = () =>{
        navigation.navigate("SignUp");
    }

    return (
        <View style={styles.container}>
            <ImageBackground  source={require('../trial/assets/welcomebackground.jpg')} style={styles.image}>
            </ImageBackground>
            <Button color = 'black' style= {styles.buttons} title="Öğretmenler" onPress={handlePress}></Button>
            <Button color = 'black' style= {styles.buttons} title="Sen de Öğretmen Ol" onPress={handleSignUp}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttons: {
        resizeMode: "cover",
        justifyContent: "center",
        color : 'white',
        width: '50%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

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
    TextInput, Button
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';



export default function SignUp ({navigation}) {
    const [selectedId, setSelectedId] = useState(null);


    const handlePress = (item) =>{
        setSelectedId(item.id);
        navigation.navigate("Homepage");
    }
    const handleEnroll = () =>{
        alert("Kayıt Başarılı");
    }
    const [text, onChangeText] = React.useState("");
    const [lastname, onChangleLastname] = React.useState("");

    const [university, onChangeUniversity] = React.useState("");
    const [salary, onChangeSalary] = React.useState("");
    const [major, onChangeMajor] = React.useState("");



    return (
        <View style={styles.container}>
            <ImageBackground  source={require('../trial/assets/background2.png')} style={styles.image}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="İsim"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangleLastname}
                    value={lastname}
                    placeholder="Soyisim"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUniversity}
                    value={university}
                    placeholder="Üniversite"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMajor}
                    value={major}
                    placeholder="Ana Dal"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSalary}
                    value={salary}
                    placeholder="Ücret"
                />
                <Button color='darkblue' onPress={handleEnroll} title="Kayıt Ol"></Button>
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
        flex:1,
        fontSize: 32,
        backgroundColor: 'white',
    },
    info: {
        flex: 2,
        textAlign: 'left',
        fontSize: 15,
        padding: 2,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.7,
        borderColor: 'white',
    },

});

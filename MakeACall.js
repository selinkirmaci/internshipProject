import React,{Component} from "react";
import {Text, StyleSheet, View, Linking, Platform, TouchableOpacity, StatusBar} from "react-native";
import {Link} from "@react-navigation/native";

export default class MakeACall extends Component{
    constructor(props) {
        super(props);
    }

    makeCall = () => {
      let phoneNumber = "";
      if(Platform.OS === 'android')
      {
          phoneNumber = 'tel:'+ this.props.phone;
      }else
      {
          phoneNumber = 'telprompt:05325876158';
      }
      Linking.openURL(phoneNumber);
    };
    render() {
        return(
            <TouchableOpacity onPress={this.makeCall} style={styles.bottomview}>
                <Text style={styles.info3}>Make A Call</Text>
            </TouchableOpacity>
        );
    }

}
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
        top: 150,
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
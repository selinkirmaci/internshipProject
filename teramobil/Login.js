/*
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import LoginUI from "./LoginUI";

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}


export default class Login extends React.Component {
    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../assets/backgroundTeraMobile.jpeg'),
        ]);

        await Promise.all([...imageAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            <LoginUI></LoginUI>
        );
    }
}

 */
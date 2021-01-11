import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const TermsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://www.notion.so/dilrong/28c31f33e49e4734812a4a10d59934c0' }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default TermsScreen;
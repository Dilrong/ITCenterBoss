import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { SCALE_16 } from '_styles/spacing';

const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://www.notion.so/dilrong/6fc96c6d74c2461ea2631e73db0183e5' }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        margin: SCALE_16
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default HelpScreen;
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const TermsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://www.foodsafetykorea.go.kr/portalmobile/complain/customerNotify.do' }}/>
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
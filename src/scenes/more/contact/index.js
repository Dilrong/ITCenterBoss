import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Title, Subheading, Paragraph } from 'react-native-paper';
import { SCALE_8 } from '_styles/spacing';

const ContactScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Paragraph>안녕하세요. 식품 대장 개발자 'Dilrong'입니다.</Paragraph>
                <Paragraph>제휴 및 문의사항은 아래 연락처로 주시면 검토 후 답변 드리고 있습니다.</Paragraph>
                <Title/>
                <Subheading style={styles.subheading}>이메일</Subheading>
                    <Paragraph>dilrong@dilrong.com</Paragraph>
                <Subheading style={styles.subheading}>개발자 블로그</Subheading>
                    <Paragraph>https://blog.naver.com/dilrong</Paragraph>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        margin: SCALE_8
    },
    subheading: {
        fontWeight: 'bold'
    }
})

export default ContactScreen;
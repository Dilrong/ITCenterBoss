import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { PRIMARY } from '_styles/colors';
import { Title, Subheading, Paragraph, Caption, Divider, Modal } from 'react-native-paper';

const DetailScreen = ({route, navigation}) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 10};

    const item = route.params.item;
    const image = item.IMG_FILE_PATH.split(",")

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={showModal}>
                <Image style={{ width: "100%", height: 250 }} source={{ uri: image[0] }}/>
            </TouchableOpacity>
            <ScrollView style={styles.content}>
                <Title style={styles.subTitle}>제품정보</Title>
                <Divider/>
                <Subheading style={styles.subTitle}>처리 근거</Subheading>
                <Paragraph>{item.RTRVLPRVNS}</Paragraph>
                <Subheading style={styles.subTitle}>제품명</Subheading>
                <Paragraph>{item.PRDTNM}</Paragraph>
                <Subheading style={styles.subTitle}>회수등급</Subheading>
                {item.RTRVL_GRDCD_NM==="1등급"?<Paragraph style={{ color: 'red' }}>{item.RTRVL_GRDCD_NM}</Paragraph>:<View/>}
                {item.RTRVL_GRDCD_NM==="2등급"?<Paragraph style={{ color: '#ffd56b' }}>{item.RTRVL_GRDCD_NM}</Paragraph>:<View/>}
                {item.RTRVL_GRDCD_NM==="3등급"?<Paragraph style={{ color: 'green' }}>{item.RTRVL_GRDCD_NM}</Paragraph>:<View/>}
                {item.RTRVL_GRDCD_NM==="1등급"?<Caption>건강에 미치는 위해 영향이 매우 크거나 중대한 위반행위를 가진 제품이에요!</Caption>:<View/>}
                {item.RTRVL_GRDCD_NM==="2등급"?<Caption>건강에 미치는 위해 영향이 일시적으로 있는 제품이에요.</Caption>:<View/>}
                {item.RTRVL_GRDCD_NM==="3등급"?<Caption>건강에 미치는 위해 영향이 적은 제품이에요.</Caption>:<View/>}
                <Subheading style={styles.subTitle}>처리일자</Subheading>
                <Paragraph>{item.CRET_DTM}</Paragraph>
                <Title/>
                <Title style={styles.subTitle}>업체정보</Title>
                <Divider/>
                <Subheading style={styles.subTitle}>업체명</Subheading>
                <Paragraph>{item.BSSHNM}</Paragraph>
                <Subheading style={styles.subTitle}>주소</Subheading>
                <Paragraph>{item.ADDR}</Paragraph>
                <Subheading style={styles.subTitle}>전화번호</Subheading>
                <Paragraph>{item.PRCSCITYPOINT_TELNO}</Paragraph>
            </ScrollView>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: image[0] }}/>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        marginLeft: SCALE_8,
    },
    subTitle: {
        fontWeight: 'bold'
    },
    menu: {
        paddingLeft: SCALE_8
    },
    caption: {
        paddingLeft: SCALE_16
    },
    detail: {
        marginLeft: SCALE_16,
    }
})

export default DetailScreen;
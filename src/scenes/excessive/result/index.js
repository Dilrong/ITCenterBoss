import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView, View, Image } from 'react-native';
import { SCALE_16, SCALE_8, SCALE_4 } from '_styles/spacing';
import { List, Divider, Modal, Title, Caption, Paragraph, ActivityIndicator } from 'react-native-paper';
import { GRAY_LIGHT } from '_styles/colors';
import { scaleSize } from '_styles/mixins';
import { ServiceKey } from '_utils/env';
import axios from 'axios';
const parser = require('fast-xml-parser');

const ResultScreen = ({route, navigation}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(15);
    const [reason, setReason]= useState('');
    const [result, setResult]= useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

    const ExcessiveListItem = ({ item }) => (
        <ScrollView>
            <List.Item
                title={item.PRDUCT}
                description={item.ENTRPS}
                onPress={() => {
                    setReason(item.FOUND_CN)
                    setResult(item.DSPS_CMMND)
                    showModal()
                }}
            />
            <Divider/>
        </ScrollView>
    )
    
    const renderExcessiveItem = ({ item }) => <ExcessiveListItem item={item} />;

    const getExcessiveData = async() => {
        await axios.get(`http://apis.data.go.kr/1470000/FoodFlshdErtsInfoService/getFoodFlshdErtsItem?serviceKey=${ServiceKey}&Prduct=${encodeURI(route.params.query)}&pageNo=1&numOfRows=${count}`)
        .then((response) => {
            const result = parser.parse(response.data);
            setRows(result.response.body.items.item);
            setCount(result.response.body.totalCount);
        })
        .catch((err) => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        getExcessiveData();
    }, [count])

    return (
        <SafeAreaView style={styles.container}>
            <Paragraph style={styles.title}>허위·과대광고({count})</Paragraph>
            {count===0?
            <View style={styles.noSearchContainer}>
                <Image style={styles.profile_img} source={require('_assets/icon.png')}/>
                <Caption style={styles.noSearch}>허위·과대광고 식품 정보가 없습니다.</Caption>
            </View>
            :<View/>}
            {loading===true || rows===undefined || rows===null?
            <ActivityIndicator style={{ paddingTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderExcessiveItem} keyExtractor={item => item.id}/>
            }
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Title>사유</Title>
                {reason.length===0?<Paragraph>알수없음</Paragraph>:<Paragraph>{reason}</Paragraph>}
                <Title/>
                <Title>결과</Title>
                {result.length===0?<Paragraph>알수없음</Paragraph>:<Paragraph>{result}</Paragraph>}
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: 'bold',
        paddingLeft: SCALE_16,
        paddingTop: SCALE_4,
        paddingBottom: SCALE_4,
        backgroundColor: GRAY_LIGHT
    },
    noSearchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile_img: {
        width: scaleSize(100),
        height: scaleSize(100),
        borderRadius: scaleSize(100),
        marginBottom: scaleSize(10)
    },
    noSearch: {
        paddingLeft: SCALE_16,
        paddingTop: SCALE_4,
        paddingBottom: SCALE_4
    },
    searchBar: {
        marginLeft: SCALE_8,
        marginRight: SCALE_8
    },
    menu: {
        paddingLeft: SCALE_8
    },
    detail: {
        marginLeft: SCALE_16,
    }
})

export default ResultScreen;
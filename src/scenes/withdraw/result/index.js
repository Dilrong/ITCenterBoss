import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { SCALE_16, SCALE_8, SCALE_4 } from '_styles/spacing';
import { List, Divider, Modal, Title, Paragraph } from 'react-native-paper';
import { GRAY_LIGHT } from '_styles/colors';
import { scaleSize } from '_styles/mixins';
import { FoodServiceKey } from '_utils/env';
import axios from 'axios';

const ResultScreen = ({route, navigation}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [rows, setRows] = useState([]);
    const [page, setPage]= useState(1);
    const [reason, setReason]= useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

    const ExcessiveListItem = ({ item }) => (
        <ScrollView>
            <List.Item
                title={item.PRDTNM}
                description={item.BSSHNM}
                onPress={() => {
                    setReason(item.RTRVLPRVNS)
                    showModal()
                }}
            />
            <Divider/>
        </ScrollView>
    )
    
    const renderExcessiveItem = ({ item }) => <ExcessiveListItem item={item} />;

    const getData = async() => {
        setLoading(true)
        await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${FoodServiceKey}/I0490/json/${page}/${page*15}`)
        .then((response) => {
            setRows(response.data.I0490.row);
        })
        .catch((err) => {
            console.log(err);
        })
        if(response){
            setLoading(false);
        }
    }

    const addData = async() => {
        await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${FoodServiceKey}/I0490/json/${page}/${page*15}`)
        .then((response) => {
            setRows(rows.concat(response.data.I0490.row))
        })
        .catch((err) => {
            console.log(err)
        })
        if(response){
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        addData();
    }, [page])

    return (
        <SafeAreaView style={styles.container}>
            <Paragraph style={styles.title}>회수·판매중지({count})</Paragraph>
            {loading===true || rows===undefined || rows===null?
            <ActivityIndicator style={{ paddingTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderExcessiveItem} keyExtractor={item => item.id} onEndReachedThreshold={0.2} onEndReached={() => {setPage(page + 1)}}/>
            }
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Title>사유</Title>
                {reason.length===0?<Paragraph>알수없음</Paragraph>:<Paragraph>{reason}</Paragraph>}
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
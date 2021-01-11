import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView, ActivityIndicator, StatusBar, Platform } from 'react-native';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { List, Divider, Caption, Appbar } from 'react-native-paper';
import { FoodServiceKey } from '_utils/env'
import axios from 'axios';

const ListScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [page, setPage]= useState(1);

    const Header = () => (
        <Appbar.Header>
            <Appbar.Content title="식품대장"/>
        </Appbar.Header>
    )

    const ListItem = ({ item }) => (
        <ScrollView>
            <List.Item
                title={item.PRDTNM}
                description={`${item.BSSHNM}`}
                onPress={() => { navigation.navigate('detail', { item: item }) }}/>
            <Divider/>
        </ScrollView>
    )
    
    const renderItem = ({ item }) => <ListItem item={item} />;

    const getData = async() => {
        setLoading(true)
        await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${FoodServiceKey}/I0490/json/${page}/${page*30}`)
        .then((response) => {
            setRows(response.data.I0490.row);
        })
        .catch((err) => {
            console.log(err);
        })
        setLoading(false);
    }

    const addData = async() => {
        await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${FoodServiceKey}/I0490/json/${page*30}/${(page+1)*30}`)
        .then((response) => {
            setRows(rows.concat(response.data.I0490.row))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        addData();
    }, [page])

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Caption style={styles.caption}>식품안전나라 서버에 따라 불러오는 시간이 오래 걸릴 수 있습니다.</Caption>
            {loading===true?
            <ActivityIndicator style={{ marginTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id} onEndReachedThreshold={0.5} onEndReached={() => {setPage(page + 1)}}/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    searchBar: {
        marginLeft: SCALE_8,
        marginRight: SCALE_8
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

export default ListScreen;
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { List, Divider } from 'react-native-paper';
import { ServiceKey } from '_utils/env'
import axios from 'axios';

const SaveScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);

    const ListItem = ({ item }) => (
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
    
    const renderItem = ({ item }) => <ListItem item={item} />;

    const getData = async() => {
        await axios.get(`http://apis.data.go.kr/1470000/FoodFlshdErtsInfoService/getFoodFlshdErtsItem?serviceKey=${ServiceKey}&Prduct&pageNo=${page}&numOfRows=20`)
        .then((response) => {
            const result = parser.parse(response.data);
            setRows(result.response.body.items.item);
            console.log(searchQuery)
            console.log(rows)
        })
        .catch((err) => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {loading===true || rows===undefined || rows===null?
            <ActivityIndicator style={{ paddingTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id}/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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

export default SaveScreen;
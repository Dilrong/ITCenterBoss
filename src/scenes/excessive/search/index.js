import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View } from 'react-native';
import { SCALE_8 } from '_styles/spacing';
import { IconButton, Searchbar } from 'react-native-paper';

const SearchScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <IconButton 
                    icon="chevron-left"
                    size={30}
                    onPress={() => navigation.goBack()}
                />
                <Searchbar
                    style={styles.searchBar}
                    placeholder="제품 이름을 입력해주세요."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onSubmitEditing={ ()=>{ navigation.navigate('result', { query: searchQuery}) }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchBar: {
        width: '80%',
        marginTop: SCALE_8,
        marginLeft: SCALE_8,
        marginRight: SCALE_8
    },
})

export default SearchScreen;
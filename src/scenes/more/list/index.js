import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, FlatList, ScrollView, View, Image, Share, Linking } from 'react-native';
import { List, Divider, Title, Subheading, Button } from 'react-native-paper';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';

const ListScreen = ({navigation}) => {
    const DATA = [{
        id: 1,
        icon: 'lightbulb-on-outline',
        title: '도움말',
        screen: 'help'
    }, {
        id: 2,
        icon: 'face-agent',
        title: '문의하기',
        screen: 'contact'
    }, {
        id: 3,
        icon: 'food-off',
        title: '불량식품 알리기',
        screen: 'report'
    }, {
        id: 4,
        icon: 'file-document-outline',
        title: '서비스 이용 약관',
        screen: 'terms'
    }, {
        id: 5,
        icon: 'file-document-outline',
        title: '개인정보 처리 방침',
        screen: 'policy'
    }]

    const Profile = () => (
        <View style={styles.profile}>
          <Image style={styles.profile_img} source={require('_assets/icon.png')}/>
          <Title>식품대장</Title>
          <Subheading style={styles.profile_name}>불량식품은 이제 그만!</Subheading>
        </View>
      )

    const ListItem = ({ item }) => (
        <ScrollView>
            <List.Item
                title={item.title}
                left={props => <List.Icon {...props} icon={item.icon} />}
                titleStyle={{
                    fontWeight: 'bold'
                }}
                onPress={() => {navigation.navigate(item.screen)}}
            />
            <Divider/>
        </ScrollView>
    )
    
    const renderItem = ({ item }) => <ListItem item={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <Profile/>
            <Divider/>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
            <Button icon="share-variant" mode="outlined" style={styles.shareButton} color="#000" onPress={() => { 
                Share.share({
                    title: '식품대장 - 불량 식품은 이제 그만!',
                    message: 'https://play.google.com/store/apps/details?id=com.dilrong.foodboss'
                })
            }}>식품대장 공유하기</Button>
            <Button icon="star" mode="outlined" style={styles.shareButton} color="#000" onPress={() => {
                Linking.openURL('https://play.google.com/store/apps/details?id=com.dilrong.foodboss')
            }}>식품대장 칭찬하기</Button>
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
        height: scaleSize(35),
        borderColor: 'gray',
        borderWidth: scaleSize(0.5),
        borderRadius: SCALE_8,
        margin: SCALE_8,
        padding: SCALE_8
    },
    menu: {
        paddingLeft: SCALE_8
    },
    content: {
        padding: SCALE_8
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_img: {
        width: scaleSize(100),
        height: scaleSize(100),
        borderRadius: scaleSize(100),
        marginBottom: scaleSize(10)
    },
    profile_name: {
        marginBottom: SCALE_16
    },
    shareButton: {
        marginLeft: SCALE_16,
        marginRight: SCALE_16,
        marginBottom: SCALE_8
    }
})

export default ListScreen;
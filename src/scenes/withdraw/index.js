import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import DetailScreen from './detail';
import SearchScreen from './search';
import ResultScreen from './result';

const WithdrawStack = createStackNavigator();

const WithdrawStackScreen = ({navigation}) => (
    <WithdrawStack.Navigator>
        <WithdrawStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <WithdrawStack.Screen name="detail" component={DetailScreen} options={{
            headerTitle: '상세'
        }}/>
        <WithdrawStack.Screen name="search" component={SearchScreen} options={{headerShown:false}}/>
        <WithdrawStack.Screen name="result" component={ResultScreen} options={{
            headerTitle: '검색결과'
        }}/>
    </WithdrawStack.Navigator>
)

export default WithdrawStackScreen;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import SearchScreen from './search';
import ResultScreen from './result';

const ExcessiveStack = createStackNavigator();

const ExcessiveStackScreen = ({navigation}) => (
    <ExcessiveStack.Navigator>
        <ExcessiveStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <ExcessiveStack.Screen name="search" component={SearchScreen} options={{headerShown:false}}/>
        <ExcessiveStack.Screen name="result" component={ResultScreen} options={{
            headerTitle: '검색결과'
        }}/>
    </ExcessiveStack.Navigator>
)

export default ExcessiveStackScreen;
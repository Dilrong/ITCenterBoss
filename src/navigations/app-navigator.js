import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY, GRAY_DARK } from '_styles/colors';

import WithdrawScreen from '../scenes/withdraw';
import ExcessiveScreen from '../scenes/excessive';
import MoreScreen from '../scenes/more';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        activeColor={PRIMARY}
        inactiveColor={GRAY_DARK}
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name="허위·과대광고" component={ExcessiveScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="access-point-network-off" color={color} size={26}/>
        }}/>
        <Tab.Screen name="회수·판매중지" component={WithdrawScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="alarm-light-outline" color={color} size={26}/>
        }}/>
        <Tab.Screen name="설정" component={MoreScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="dots-horizontal" color={color} size={26}/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;
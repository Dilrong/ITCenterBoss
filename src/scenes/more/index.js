import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import HelpScreen from './help';
import ContactScreen from './contact';
import TermsScreen from './terms';
import PolicyScreen from './policy';
import SaveScreen from './save';
import ReportScreen from './report';

const MoreStack = createStackNavigator();

const MoreStackScreen = ({navigation}) => (
    <MoreStack.Navigator>
        <MoreStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <MoreStack.Screen name="help" component={HelpScreen} options={{
            headerTitle: '도움말'
        }}/>
        <MoreStack.Screen name="save" component={SaveScreen} options={{
            headerTitle: '저장한 식품'
        }}/>
        <MoreStack.Screen name="contact" component={ContactScreen} options={{
            headerTitle: '문의하기'
        }}/>
        <MoreStack.Screen name="report" component={ReportScreen} options={{
            headerTitle: '불량식품 알리기'
        }}/>
        <MoreStack.Screen name="terms" component={TermsScreen} options={{
            headerTitle: '서비스 이용 약관'
        }}/>
        <MoreStack.Screen name="policy" component={PolicyScreen} options={{
            headerTitle: '개인 정보 처리 방침'
        }}/>
    </MoreStack.Navigator>
)

export default MoreStackScreen;
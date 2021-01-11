import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

export const MenuBar = ({navigation, title, subtitle}) => (
    <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}/>
        <Appbar.Content title={title} subtitle={subtitle}/>
        <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
)
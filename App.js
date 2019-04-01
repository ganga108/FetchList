import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer,NavigationScreenOption} from 'react-navigation'
import Users from './src/Users'
import DataList from './src/DataList';

const AppNavigator = createStackNavigator({
  Home:{screen:DataList},
  Target:{screen:Users},
})

export default createAppContainer(AppNavigator);

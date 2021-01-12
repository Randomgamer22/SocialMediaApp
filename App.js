import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import InScreen from './screens/In';
import FbScreen from './screens/Fb';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FbScreen},
  Instagram: {screen: InScreen},
  });

const AppContainer = createAppContainer(TabNavigator);

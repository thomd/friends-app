import { React } from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import { FriendsScreen } from './screens/FriendsScreen'
import { HomeScreen, HomeIcon } from './screens/HomeScreen'
import { Settings as SettingsScreen, SettingsIcon } from './screens/Settings'

const HomeStack = createStackNavigator(
  { HomeScreen, FriendsScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'aliceblue'
      }
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Friends',
        tabBarIcon: HomeIcon
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: SettingsIcon
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'aliceblue'
      }
    }
  }
)

export default createAppContainer(TabNavigator)

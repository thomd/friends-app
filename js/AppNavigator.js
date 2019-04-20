import { React } from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import { Friends as FriendScreen } from './screens/Friend'
import { Home as HomeScreen, HomeIcon } from './screens/Home'
import { Settings as SettingsScreen, SettingsIcon } from './screens/Settings'

const HomeStack = createStackNavigator({ HomeScreen, FriendScreen })

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

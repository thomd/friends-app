import { React } from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import { Home as HomeScreen, HomeIcon } from './screens/Home'
import { Settings as SettingsScreen, SettingsIcon } from './screens/Settings'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
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
})

export default createAppContainer(TabNavigator)

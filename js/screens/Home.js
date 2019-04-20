import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'expo'

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}

export const HomeIcon = ({ tintColor }) => {
  return <Icon.Feather name="home" size={24} color={tintColor} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Icon } from 'expo'

export class Home extends Component {
  static navigationOptions = { header: null }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Friend"
          onPress={() =>
            navigation.navigate('FriendScreen', {
              friend: 'Alice'
            })
          }
        />
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

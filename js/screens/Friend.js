import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export class Friends extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('friend')
    }
  }
  render() {
    const { navigation } = this.props
    const friend = navigation.getParam('friend')
    return (
      <View style={styles.container}>
        <Text>{friend}</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

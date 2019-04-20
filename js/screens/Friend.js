import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export class Friends extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Friend</Text>
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

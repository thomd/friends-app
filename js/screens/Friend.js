import React, { Component } from 'react'
import { Image, StyleSheet, Text, ScrollView } from 'react-native'

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
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../../assets/icon.png')} />
        <Text>Hi {friend}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'white'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  image: {
    marginBottom: 10
  }
})

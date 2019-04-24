import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, ScrollView } from 'react-native'

export class FriendsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const friend = navigation.getParam('friend')
    return {
      title: `${friend.name.first} ${friend.name.last}`
    }
  }
  render() {
    const friend = this.props.navigation.getParam('friend')
    return (
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
        <Image style={styles.image} source={{ uri: friend.picture.large }} />
        <Text>{friend.name.first}</Text>
      </ScrollView>
    )
  }
}

const width = Dimensions.get('window').width * 0.75

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
    width: width,
    height: width,
    marginBottom: 10
  }
})

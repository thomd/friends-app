import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const FriendListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/icon.png')} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  name: {
    fontWeight: 'bold'
  }
})

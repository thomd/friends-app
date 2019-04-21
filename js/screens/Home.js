import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Icon } from 'expo'
import { FriendListItem } from '../components/FriendListItem'

export class Home extends Component {
  static navigationOptions = { header: null }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: '1', name: 'Alice' }, { key: '2', name: 'Bob' }]}
          renderItem={({ item }) => (
            <FriendListItem
              item={item}
              onPress={() =>
                navigation.navigate('FriendScreen', {
                  friend: item.name
                })
              }
            />
          )}
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
    marginTop: 100
  }
})

import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Icon } from 'expo'
import { FriendListItem } from '../components/FriendListItem'

export class HomeScreen extends Component {
  static navigationOptions = { header: null }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { first: 'Alice', last: 'Kaminsky', email: 'test1@example.com' },
            { first: 'Bob', last: 'Kaminsky', email: 'test2@example.com' },
            { first: 'Paul', last: 'Kaminsky', email: 'test3@example.com' },
            { first: 'Alfred', last: 'Kaminsky', email: 'test4@example.com' }
          ]}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <FriendListItem
              item={item}
              onPress={() =>
                navigation.navigate('FriendsScreen', {
                  friend: item
                })
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
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
    marginTop: 40
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    marginVertical: 5
  }
})

import React, { Component } from 'react'
import { ActivityIndicator, Alert, StyleSheet, FlatList, View, Text } from 'react-native'
import { Icon } from 'expo'
import { FriendListItem } from '../components/FriendListItem'

export class HomeScreen extends Component {
  static navigationOptions = { header: null }
  state = { data: [], isLoading: true }

  _fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20')
      const friends = await response.json()
      this.setState({ data: friends.results, isLoading: false })
    } catch (error) {
      Alert.alert('No Internet Connection')
      this.setState({ isLoading: false })
    }
  }

  componentDidMount() {
    this._fetchData()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )
    }

    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
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
          ListEmptyComponent={() => <Text style={styles.listEmpty}>No Data</Text>}
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 40
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    marginVertical: 5
  },
  listEmpty: {
    fontSize: 32,
    paddingTop: 100,
    textAlign: 'center'
  }
})

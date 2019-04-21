import React from 'react'
import { Button } from 'react-native'

export const FriendListItem = ({ item, onPress }) => {
  return <Button title={`Go to ${item.name}`} onPress={onPress} />
}

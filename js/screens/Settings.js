import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'expo'

const SectionItem = props => {
  return <Text style={styles.item}>{props.name}</Text>
}

const SectionHeader = props => {
  return <Text style={styles.section}>{props.title}</Text>
}

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Version',
              data: [{ key: '1', name: 'v1.0' }]
            },
            {
              title: 'Impressum',
              data: [{ key: '2', name: 'ACME Inc.' }, { key: '3', name: 'Copyright 2019' }]
            }
          ]}
          renderItem={({ item }) => <SectionItem name={item.name} />}
          renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
        />
      </View>
    )
  }
}

export const SettingsIcon = ({ tintColor }) => {
  return <Icon.Feather name="settings" size={24} color={tintColor} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    fontSize: 18,
    padding: 5
  },
  item: {
    color: 'dimgrey',
    fontSize: 18,
    padding: 5
  }
})

import React from 'react'
import { StyleSheet, View, Slider, Text } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  state = {
    value: 0,
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  slider: {
    backgroundColor: '#f00',
    color: 'green',
  },
})

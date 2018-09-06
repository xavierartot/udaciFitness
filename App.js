import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddEntry from './components/AddEntry'
import Form from './formsTest/Form'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
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
  },
  text: {
    color: '#000',
  },
  slider: {
    backgroundColor: '#f00',
    color: 'green',
  },
})

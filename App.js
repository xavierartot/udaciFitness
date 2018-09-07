import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddEntry from './components/AddEntry'
// import Form from './formsTest/Form'
// import Pics from './imagesTest/Pics'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Form /> */}
        {/*  <Pics /> */}
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
  },
  text: {
    color: '#000',
  },
  slider: {
    backgroundColor: '#f00',
    color: 'green',
  },
})

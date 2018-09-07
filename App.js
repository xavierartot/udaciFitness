import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import AddEntry from './components/AddEntry'
// import Form from './formsTest/Form'
// import Pics from './imagesTest/Pics'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          {/* <Form /> */}
          {/*  <Pics /> */}
          <AddEntry />
        </View>
      </Provider>
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

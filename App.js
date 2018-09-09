import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import AddEntry from './components/AddEntry'
import History from './components/History'
// import Form from './formsTest/Form'
// import Pics from './imagesTest/Pics'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <History />
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

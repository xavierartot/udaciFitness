import React from 'react'
import { StyleSheet, View , Slider} from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        <Slider  onChangeValue={
          this.setState(( value ) => ({
            value
          }))
          value={ this.state.value }
        />
        <Text>
          { this.state.value }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

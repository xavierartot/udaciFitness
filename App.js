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
        <Slider
          onValueChange={value => this.setState(() => ({
            value,
          }))}
          value={this.state.value}
        />
        <Text style={styles.text}>
          Value : { this.state.value }
        </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
})

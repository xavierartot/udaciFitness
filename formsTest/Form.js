import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Switch, // form
  TextInput,
  KeyboardAvoidingView, // never avoiding view with the keyboard
  Image,
} from 'react-native'

class Form extends Component {
  state = {
    input: '@xavier',
    showInput: false,
  }
  handleToggleSwitch = () => {
    // console.log(this.state.showInput)
    this.setState(state => ({
      showInput: !state.showInput,
    }))
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }))
  }
  render() {
    const { input, showInput } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          source={{ uri: 'https://github.com/xavierartot.png' }}
          style={styles.img}
        />
        <Switch
          onValueChange={this.handleToggleSwitch}
          value={showInput}
        />
        { showInput === true && (
          <TextInput
            onChange={this.handleTextChange}
            style={styles.input}
            value={input}
          />
        ) }
      </KeyboardAvoidingView>
    )
  }
}
export default Form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    padding: 8,
    height: 44,
    borderWidth: 1,
    borderColor: '#f00',
    color: '#000',
    margin: 50,
  },
  text: {
    color: '#000',
  },
  slider: {
    backgroundColor: '#f00',
    color: 'green',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
})

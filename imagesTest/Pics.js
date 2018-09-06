import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native'

class Pics extends Component {
  render() {
    return (
      <View>
        <View style={{ margin: 40 }} />
        <Image
          source={require('../xavierartot.jpeg')}
          style={styles.img}
        />
        <View style={{ margin: 40 }} />
        <Image
          source={{ uri: 'https://github.com/xavierartot.png' }}
          style={styles.img}
        />
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
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default Pics

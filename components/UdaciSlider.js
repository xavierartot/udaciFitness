import React, { Component } from 'react'
import { View, Slider, StyleSheet, Text } from 'react-native'
import { gray } from '../utils/colors'

class UdaciSlider extends Component {
  render() {
    const {
      onChange, value, max, unit, step,
    } = this.props
    return (
      <View style={styles.row}>
        <Slider
          maximumValue={max}
          minimumValue={0}
          onValueChange={onChange}
          step={step}
          style={{ flex: 1 }}
          value={value}
        />
        <View style={styles.metricCounter}>
          <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
          <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default UdaciSlider


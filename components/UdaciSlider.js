import React, { Component } from 'react'
import { Slider, View, Text } from 'react-native'

class UdaciSlider extends Component {
  render() {
    const {
      onChange, value, max, unit, step,
    } = this.props
    return (
      <View style={{ flexDirection: 'column' }}>
        <Slider
          maximumValue={max}
          minimumValue={0}
          onValueChange={onChange}
          step={step}
          value={value}
        />
        <View>
          <Text>{value}</Text>
          <Text>{unit}</Text>
        </View>

      </View>
    )
  }
}
export default UdaciSlider


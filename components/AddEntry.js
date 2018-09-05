import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'

const SubmitButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Text>
      Submit
    </Text>
  </TouchableOpacity>
)

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }
  submit = (event) => {
    event.preventDefault()
    const key = timeToString()
    const entry = this.state
    // console.log(entry)
    // Update Redux

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    }))

    // Navigation to home

    // Save to 'DB'

    // Clear local notification
  }
  render() {
    const metaInfo = getMetricMetaInfo()
    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        <Text>
          {/* {JSON.stringify(this.state)} */}
        </Text>
        {Object.keys(metaInfo).map((key) => {
        const { getIcon, type, ...rest } = metaInfo[key]
        const value = this.state[key]
        return (
          <View key={key}>
            {getIcon()}
            {/* show a slider or steppers */}
            { type === 'slider'
            ? <UdaciSlider
              onChange={value => this.slide(key, value)}
              value={value}
              {...rest}
            />
            : <UdaciSteppers
              onDecrement={() => this.decrement(key)}
              onIncrement={() => this.increment(key)}
              value={value}
              {...rest}
            />
            }
          </View>
          )
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

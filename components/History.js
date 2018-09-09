import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    // fake the DB with AsyncStorage
    fetchCalendarResults()
      // then fetch the datas
      .then((entries) => {
        dispatch(receiveEntries(entries))
      })
      .then(({ entries }) => {
        // console.log(entries)
        if (!entries[timeToString()]) { // we haven't entered any information in for the current day
          // we add an entry
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue(),
          }))
        }
      })
      .then(() => this.setState(() => ({ ready: true })))
  }
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries,
  }
}

export default connect(mapStateToProps)(History)

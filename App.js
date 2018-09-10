import React from 'react'
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import AddEntry from './components/AddEntry'
import EntryDetail from './components/EntryDetail'
import History from './components/History'

import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

// custom status bar
import { Constants } from 'expo'// add constance

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} translucent {...props} />
    </View>
  )
}
// first parameter of  createBottomTabNavigator and createMaterialTopTabNavigator
const RouteConfigs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons color={tintColor} name="ios-bookmarks" size={30} />,
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tintColor }) => <FontAwesome color={tintColor} name="plus-square" size={30} />,
    },
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    // header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
}

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
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

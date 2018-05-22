import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native'
import Color from 'react-native-material-color'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Constants } from 'expo'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'

function CardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'List',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add',
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Color.White,
    style: {
      height: 56,
      backgroundColor: Color.DeepOrange,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  AddCard: { screen: AddCard },
}, {
  headerMode: 'screen',
  mode: 'modal',
  navigationOptions: {
    headerTintColor: Color.White,
    headerStyle: {
      backgroundColor: Color.DeepOrange,
      height: 56,
    },
  },
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <CardsStatusBar backgroundColor={Color.DeepOrange} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

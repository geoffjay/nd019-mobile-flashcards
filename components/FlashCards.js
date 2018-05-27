import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native'
import Color from 'react-native-material-color'
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { CardsStatusBar } from './CardsStatusBar'
import AddDeck from '../containers/AddDeck'
import DeckList from './DeckList'
import Deck from './Deck'
import Quiz from './Quiz'
import AddCard from './AddCard'

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

class FlashCards extends Component {
  componentDidMount() {
    this._initialData()
    console.log(this.props.decks)
  }

  _initialData() {
    this.props.getDecks()
  }

  render() {
    // XXX move this
    // const { decks } = this.props

    return (
      <View style={styles.container}>
        <CardsStatusBar backgroundColor={Color.DeepOrange} barStyle="light-content" />
        {/*<List decks={decks}/>*/}
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default FlashCards

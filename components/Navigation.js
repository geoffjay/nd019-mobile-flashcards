import Color from 'react-native-material-color'
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import AddCard from '../containers/AddCard'
import AddDeck from '../containers/AddDeck'
import Deck from '../containers/Deck'
import DeckList from '../containers/DeckList'
import Quiz from '../containers/Quiz'

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

export const MainNavigator = createStackNavigator({
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

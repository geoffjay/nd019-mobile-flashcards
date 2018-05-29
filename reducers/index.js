import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native'
import * as api from '../utils/api'

const FlashCards = (state = [], action) => {
  switch(action.type) {
  case types.ADD_CARD:
    api.addCardToDeck(action.title, action.card)
    return { ...state }
  case types.ADD_DECK:
    api.saveDeckTitle(action.deck)
    return { ...state }
  case types.RECEIVE_DECKS:
    return {
      ...state,
      ...action.decks
    }
  default:
    return state
  }
}

export default FlashCards

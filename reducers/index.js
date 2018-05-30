import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native'

const FlashCards = (state = [], action) => {
  switch(action.type) {
  case types.ADD_CARD:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: action.questions || [],
        }
      }
  case types.ADD_DECK:
    return {
      ...state,
      [action.deck]: {
        title: action.deck,
        questions: [],
      }
    }
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

import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native'
import * as api from '../utils/api'

const deck = (state, action) => {
  switch(action.type) {
  case types.ADD_DECK:
    return {
      [action.deck]: {
        title: action.deck,
        questions: [],
      }
    }
  default:
    return state
  }
}

const card = (state, action) => {
  switch (action.type) {
  case types.ADD_CARD:
    return {
      [action.title]: {
        questions: {
          card
        }
      },
    }
    break
  default:
    return state
  }
}

const FlashCards = (state = [], action) => {
  switch(action.type) {
  case types.ADD_CARD:
    api.addCardToDeck(action.title, action.card)
    //api.saveAllData(state)
    return { ...state }
  case types.ADD_DECK:
    //const decks = [...state, deck(undefined, action)]
    //api.saveAllData(decks)
    //return decks
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

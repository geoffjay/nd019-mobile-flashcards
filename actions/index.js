import { AsyncStorage } from 'react-native'
import * as types from '../constants/ActionTypes'
import { DECKS_STORAGE_KEY } from '../utils/decks'

export const addCard = (title, card) => {
  return {
    type: types.ADD_CARD,
    title,
    card,
  }
}

export const addDeck = (deck) => {
  return {
    type: types.ADD_DECK,
    deck,
  }
}

export const receiveDecks = (decks) => {
  return {
    type: types.RECEIVE_DECKS,
    decks: decks || [],
  }
}

export const getDecks = () => {
  return dispatch => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((decks) => {
        dispatch(receiveDecks(JSON.parse(decks)))
      })
  }
}

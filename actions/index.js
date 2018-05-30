import { AsyncStorage } from 'react-native'
import * as types from '../constants/ActionTypes'

/**
 * @description Create an action to add a card to a deck.
 * @param {title} Deck to add the new card to
 * @param {card} Object to insert into the deck
 * @returns Object representing the state action
 */
export const addCard = (title, card, questions) => {
  return {
    type: types.ADD_CARD,
    title,
    card,
    questions,
  }
}

/**
 * @description Create an action to add a deck to the set.
 * @param {deck} Title of the deck to add
 * @returns Object representing the state action
 */
export const addDeck = (deck) => {
  return {
    type: types.ADD_DECK,
    deck,
  }
}

/**
 * @description  Create an action to retrieve the set of decks.
 * @param {decks} The retrieved set of decks to use for the state
 * @returns Object representing the state action
 */
export const receiveDecks = (decks) => {
  return {
    type: types.RECEIVE_DECKS,
    decks: decks || [],
  }
}

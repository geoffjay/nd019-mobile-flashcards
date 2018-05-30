import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from './decks'
import { receiveDecks, addDeck, addCard } from '../actions'

/**
 * @description Retrieve the decks data from storage.
 * @returns Promise for the async call to storage retrieval
 */
export const getDecks = () => {
  return dispatch => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((decks) => {
        dispatch(receiveDecks(JSON.parse(decks)))
      })
  }
}

/**
 * @description Create a new deck in the device storage.
 * @param {title} Name of the deck to save
 * //@returns Promise for the async call to
 */
export const saveDeckTitle = async (title) => {
  try {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, decks) => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
        ...JSON.parse(decks),
        [title]: { 'title': title }
      }))
    })
  } catch (error) {
    console.log(`Error updating the deck title: ${error.message}`)
  }
}

export const saveDeckTitle2 = (title) => {
  return dispatch => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((decks) => {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
          ...JSON.parse(decks),
          [title]: {
            'title': title,
            'questions': []
          }
        }))
          .then(() => {
            dispatch(addDeck(title))
          })
      })
  }
}

/**
 * @description Create a new card in a deck on the device storage.
 * @param {title} Name of the deck to add a card to
 * @param {card} Object containing card data to add
 * //@returns Promise for the async call to
 */
export const addCardToDeck = async (title, card) => {
  try {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, decks) => {
      let questions = []
      Object.values(JSON.parse(decks))
        .map((deck) => {
          if (deck.title === title) {
            questions = [...deck.questions || [], card]
          }
        })
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions
        }
      }))
    })
  } catch (error) {
    console.log(`Error adding card to deck: ${error.message}`)
  }
}

export const addCardToDeck2 = (title, card) => {
  return dispatch => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((decks) => {
        let questions = []
        Object.values(JSON.parse(decks))
          .map((deck) => {
            if (deck.title === title) {
              questions = [...deck.questions || [], card]
            }
          })
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
          [title]: {
            title,
            questions
          }
        }))
          .then(() => {
            // FIXME: This is the wrong way to do this
            dispatch(addCard(title, card, questions))
          })
    })
  }
}

import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from './decks'

function formatDeckResults(results) {
  console.log(results)
}

export const getDecks = async () => {
  try {
    await AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((results) => console.log(results))
  } catch (error) {
    console.log(`Error retrieving decks: ${error.message}`)
  }
}

export const getDeck = async (id) => {
  try {
    await AsyncStorage.getItem(DECKS_STORAGE_KEY)
  } catch (error) {
    console.log(`Error retrieving deck: ${error.message}`)
  }
}

export const saveDeckTitle = async (title) => {
  try {
    const deck = { 'balls': { 'title': title } }
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
      deck
    }))
  } catch (error) {
    console.log(`Error updating the deck title: ${error.message}`)
  }
}

export const addCardToDeck = async (title, card) => {
  try {
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        questions: [
          ...questions,
          card,
        ]
      }
    }))
  } catch (error) {
    console.log(`Error adding card to deck: ${error.message}`)
  }
}

export const saveAllData = async (state) => {
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message)
  }
}

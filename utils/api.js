import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from './decks'

export const getDecks = async () => {
  try {
    await AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((results) => console.log(results))
  } catch (error) {
    console.log(`Error retrieving decks: ${error.message}`)
  }
}

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

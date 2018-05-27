import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Color from 'react-native-material-color'
import { AppLoading } from 'expo'
import { receiveDecks } from '../actions'
import { DeckButton } from './DeckButton'

// TODO: Add container
class DeckList extends Component {
  state = {
    ready: false,
  }

  render() {
    const { decks } = this.props
    // TODO: make this dataLoaded in redux state
    const { ready } = this.state

    /*
     *if (ready === false) {
     *  return <AppLoading />
     *}
     */

    // FIXME: Use deck.title instead of random string
    return (
      <ScrollView style={styles.container}>
        {Object.values(decks).map((deck) => (
          <DeckButton
            key={Math.random().toString(36).substr(2, 5)}
            style={styles.button}
            onPress={() => this.props.navigation.navigate(
              'Deck',
              { deckId: deck.title }
            )}
          >
            <View>
              <Text style={styles.title}>
                {deck.title || 'undefined'}
              </Text>
              <Text style={styles.count}>
                {deck.questions ? deck.questions.length : 0} cards
              </Text>
            </View>
          </DeckButton>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  button: {
    elevation: 3,
    flex: 1,
    margin: 10,
    padding: 30,
    backgroundColor: Color.White,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: Color.Black,
  },
  count: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    color: Color.Grey,
  },
})

export default DeckList

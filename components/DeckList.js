import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import Color from 'react-native-material-color'
import { DeckButton } from './DeckButton'

const decks = [
  {
    id: 'one',
    name: 'One',
    cardCount: 0,
  }, {
    id: 'two',
    name: 'Two',
    cardCount: 5,
  }, {
    id: 'three',
    name: 'Three',
    cardCount: 8,
  }, {
    id: 'four',
    name: 'Four',
    cardCount: 28,
  },
]

class DeckList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {decks.map((deck) => (
          <DeckButton
            key={deck.name}
            style={styles.button}
            onPress={() => this.props.navigation.navigate(
              'Deck',
              { deckId: deck.id }
            )}
          >
            <View>
              <Text style={styles.title}>{deck.name}</Text>
              <Text style={styles.count}>{deck.cardCount} cards</Text>
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

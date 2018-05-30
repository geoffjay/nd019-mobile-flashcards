import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from 'react-native-material-color'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: `${deckId}`,
      visible: true,
    }
  }

  render() {
    const { decks, deckId } = this.props
    const deck = decks[deckId]

    return (
      <View style={styles.container}>
        {deck &&
          <View>
            <Text style={styles.header}>{deckId}</Text>
            <Text style={styles.cardCount}>
              {deck.questions ? deck.questions.length : 0} cards</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate(
                'AddCard',
                { deckId: deckId }
              )}
            >
              <Text>
                Add Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate(
                'Quiz',
                { deckId: deckId }
              )}
            >
              <Text>
                Start Quiz
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 20,
    color: Color.Grey,
  },
  button: {
    elevation: 3,
    padding: 20,
    margin: 20,
    backgroundColor: Color.White,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
})

export default Deck

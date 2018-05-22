import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from 'react-native-material-color'
import { connect } from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    // get deck ?

    return {
      title: `${deckId}`,
      visible: true,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.deckId}</Text>
        <Text style={styles.cardCount}>{3} cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckId: this.props.deckId }
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
            { deckId: this.props.deckId }
          )}
        >
          <Text>
            Start Quiz
          </Text>
        </TouchableOpacity>
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


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    //deck: state[deckId],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    /*
     *remove: () => dispatch(addDeck({
     *  [deckId]: timeToString() === deckId
     *    ? getDailyReminderValue()
     *    : null
     *})),
     */
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck)

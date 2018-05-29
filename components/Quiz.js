import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Color from 'react-native-material-color'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

class Quiz extends Component {
  state = {
    pos: 0,
    score: 0,
    showQuestion: true,
    complete: false,
  }

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: 'Quiz',
      visible: true,
    }
  }

  /**
   * @description Toggle state to reveal question or answer.
   */
  toggleQuestionAnswer = () => {
    this.setState({
      showQuestion: !this.state.showQuestion,
    })
  }

  /**
   * @description Handle a correct answer to the quiz question.
   */
  handleCorrect = () => {
    const { decks, deckId } = this.props

    this.setState({
      score: this.state.score + 1,
      pos: this.state.pos + 1,
    })

    if (this.state.pos === decks[deckId].questions.length - 1) {
      this.setState({ complete: true })
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  /**
   * @description Handle an incorrect answer to the quiz question.
   */
  handleIncorrect = () => {
    const { decks, deckId } = this.props

    this.setState({
      pos: this.state.pos + 1,
    })

    if (this.state.pos === decks[deckId].questions.length - 1) {
      this.setState({ complete: true })
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  /**
   * @description Restart the quiz from the beginning.
   */
  restartQuiz = () => {
    this.setState({
      pos: 0,
      score: 0,
      showQuestion: true,
      complete: false,
    })
  }

  render() {
    const { decks, deckId } = this.props
    const { pos, showQuestion } = this.state

    const deck = decks[deckId]

    return (
      <View style={styles.container}>
      {deck.questions ?
        <View>
          {!this.state.complete ?
            <View>
              <Text style={styles.progress}>
                {deck.questions.length - pos}/{deck.questions.length}
              </Text>
              <Text style={styles.question}>
                {showQuestion
                  ? deck.questions[pos].question
                  : deck.questions[pos].answer
                }
              </Text>
              <TouchableOpacity onPress={() => this.toggleQuestionAnswer()}>
                <Text style={styles.subHeader}>
                  {showQuestion
                    ? 'Answer'
                    : 'Question'
                  }
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: Color.GREEN[400]}]}
                onPress={() => this.handleCorrect()}
              >
                <Text style={styles.buttonText}>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: Color.RED[400]}]}
                onPress={() => this.handleIncorrect()}
              >
                <Text style={styles.buttonText}>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          :
            <View>
              <Text style={styles.complete}>
                You completed the quiz with a score of
              </Text>
              <Text style={styles.score}>
                {Math.round(this.state.score / deck.questions.length * 100)} %
              </Text>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: Color.GREEN[400]}]}
                onPress={() => this.restartQuiz()}
              >
                <Text style={styles.buttonText}>
                  Restart Quiz
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: Color.RED[400]}]}
                onPress={() => this.props.goBack()}
              >
                <Text style={styles.buttonText}>
                  Back to Deck
                </Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      :
        <View>
          <Text style={styles.question}>
            There are no questions to quiz.
          </Text>
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
  question: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: Color.Red,
    marginBottom: 60,
  },
  button: {
    elevation: 3,
    padding: 20,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonText: {
    color: Color.White,
    textAlign: 'center',
  },
  complete: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  score: {
    textAlign: 'center',
    fontSize: 48,
    color: Color.Red,
  },
})

export default Quiz

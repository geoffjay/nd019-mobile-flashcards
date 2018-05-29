import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import Color from 'react-native-material-color'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: 'Add Card',
      visible: true,
    }
  }

  /**
   * @description Creates a new card using inputs and requests that it be added
   * to storage.
   */
  handlePress = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addCard(this.props.deckId, card)
    this.state.question = ''
    this.state.answer = ''
    this.props.goBack()
  }

  render() {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Enter a question and answer to add to the deck.
        </Text>
        <TextField
          label="Question"
          tintColor={Color.ORANGE[300]}
          value={question}
          onChangeText={(question) => this.setState({ question })}
          containerStyle={{marginBottom: 10}}
        />
        <TextField
          label="Answer"
          tintColor={Color.ORANGE[300]}
          value={answer}
          onChangeText={(answer) => this.setState({ answer })}
          containerStyle={{marginBottom: 30}}
        />
        <View style={styles.submit}>
          <Button
            title="Submit"
            onPress={() => this.handlePress()}
            color={Color.ORANGE[400]}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  text: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    paddingLeft: 40,
    paddingRight: 40,
  },
})

export default AddCard

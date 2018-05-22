import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import Color from 'react-native-material-color'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    // get deck ?

    return {
      title: 'Add Card',
      visible: true,
    }
  }

  handlePress = () => {
    console.log('submit')
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
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard)

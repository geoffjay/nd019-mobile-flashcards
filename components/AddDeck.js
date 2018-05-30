import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { TextField } from 'react-native-material-textfield'
import Color from 'react-native-material-color'

class AddDeck extends Component {
  state = {
    title: '',
  }

  /**
   * @description Creates a new deck using the title provided.
   */
  handlePress = (title) => {
    this.props.addDeck(title)
    this.state.title = ''
    this.props.navigation.navigate(
      'Deck',
      { deckId: title }
    )
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.text}>
          What is the title of your new deck?
        </Text>
        <TextField
          label="Deck Title"
          tintColor={Color.ORANGE[300]}
          value={title}
          onChangeText={(title) => this.setState({ title })}
          containerStyle={{marginBottom: 20}}
        />
        <View style={styles.submit}>
          <Button
            title="Submit"
            onPress={() => this.handlePress(title)}
            color={Color.ORANGE[400]}
          />
        </View>
      </KeyboardAvoidingView>
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
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    paddingLeft: 40,
    paddingRight: 40,
  },
})

export default AddDeck

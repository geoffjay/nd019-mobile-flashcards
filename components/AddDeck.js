import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import Color from 'react-native-material-color'

class AddDeck extends Component {
  state = {
    title: '',
  }

  handlePress = () => {
    console.log('submit')
  }

  render() {
    let { title } = this.state
    return (
      <View style={styles.container}>
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

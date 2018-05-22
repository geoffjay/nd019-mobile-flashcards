import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Color from 'react-native-material-color'
import { connect } from 'react-redux'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    // get deck ?

    return {
      title: 'Quiz',
      visible: true,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{this.props.deckId}</Text>
        <Text style={styles.subHeader}>Question/Answer</Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: Color.GREEN[400]}]}
        >
          <Text style={styles.buttonText}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: Color.RED[400]}]}
        >
          <Text style={styles.buttonText}>
            Incorrect
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
  question: {
    textAlign: 'center',
    fontSize: 48,
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
)(Quiz)

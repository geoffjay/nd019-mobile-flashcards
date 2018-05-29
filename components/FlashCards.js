import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  //AsyncStorage
} from 'react-native'
import Color from 'react-native-material-color'
import { CardsStatusBar } from './CardsStatusBar'
import { MainNavigator } from './Navigation'

class FlashCards extends Component {
  componentDidMount() {
    //AsyncStorage.clear()
    this._initialData()
  }

  _initialData() {
    this.props.getDecks()
  }

  render() {
    return (
      <View style={styles.container}>
        <CardsStatusBar backgroundColor={Color.DeepOrange} barStyle="light-content" />
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default FlashCards

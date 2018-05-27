import { connect } from 'react-redux'
import Deck from '../components/Deck'

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params

  return {
    deckId,
    decks: state,
  }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params

  return {
    goBack: () => navigation.goBack(),
  }
}

const DeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck)

export default DeckContainer

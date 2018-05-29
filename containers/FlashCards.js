import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import FlashCards from '../components/FlashCards'

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => {
      dispatch(getDecks())
    }
  }
}

const FlashCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashCards)

export default FlashCardsContainer

import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import DeckList from '../components/DeckList'

const mapStateToProps = (state, { navigation }) => {
  return {
    decks: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => {
      dispatch(getDecks())
    }
  }
}

const DeckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList)

export default DeckListContainer

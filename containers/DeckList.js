import { connect } from 'react-redux'
import DeckList from '../components/DeckList'

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

const DeckListContainer = connect(
  mapStateToProps,
)(DeckList)

export default DeckListContainer

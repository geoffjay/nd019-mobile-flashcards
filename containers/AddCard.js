import { connect } from 'react-redux'
//import { addCard } from '../actions'
import { addCardToDeck2 } from '../utils/api'
import AddCard from '../components/AddCard'

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params

  return {
    deckId,
  }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params

  return {
    goBack: () => navigation.goBack(),
    addCard: (deck, card) => {
      //dispatch(addCard(deck, card))
      dispatch(addCardToDeck2(deck, card))
    },
  }
}

const AddCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)

export default AddCardContainer

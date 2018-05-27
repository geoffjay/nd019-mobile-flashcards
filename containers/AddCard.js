import { connect } from 'react-redux'
import { addCard } from '../actions'
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
      dispatch(addCard(deck, card))
    },
  }
}

const AddCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)

export default AddCardContainer

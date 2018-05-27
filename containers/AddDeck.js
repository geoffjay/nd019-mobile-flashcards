import { connect } from 'react-redux'
import { addDeck } from '../actions'
import AddDeck from '../components/AddDeck'

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    addDeck: (title) => {
      dispatch(addDeck(title))
    },
    goBack: () => navigation.goBack(),
  }
}

const AddDeckContainer = connect(
  null,
  mapDispatchToProps
)(AddDeck)

export default AddDeckContainer

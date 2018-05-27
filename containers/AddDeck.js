import { connect } from 'react-redux'
import { addDeck } from '../actions'
import AddDeck from '../components/AddDeck'

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    goBack: () => navigation.goBack(),
    addDeck: (title) => {
      dispatch(addDeck(title))
    }
  }
}

const AddDeckContainer = connect(
  null,
  mapDispatchToProps
)(AddDeck)

export default AddDeckContainer

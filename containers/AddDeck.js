import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import AddDeck from '../components/AddDeck'

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    addDeck: (title) => {
      dispatch(saveDeckTitle(title))
    },
    goBack: () => navigation.goBack(),
  }
}

const AddDeckContainer = connect(
  null,
  mapDispatchToProps
)(AddDeck)

export default AddDeckContainer

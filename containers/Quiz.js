import { connect } from 'react-redux'
import Quiz from '../components/Quiz'

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

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuizContainer

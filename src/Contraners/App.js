import { useEffect } from 'react'
import { connect } from 'react-redux'
import { load } from '../Actions/Share'
import Questions from '../Components/Questions'

const App = props => {

  const {questions, dispatch} = props
  useEffect(() => dispatch(load()), [dispatch])

  return (
    <div>
       { Object.keys(questions).length !== 0  && 
          <Questions questions={props.questions} />
        }
    </div>
  )
}

const mapStateToProps = state => {
  const { questions } = state
  
  return {
    questions
  }
}


export default connect(mapStateToProps)(App)
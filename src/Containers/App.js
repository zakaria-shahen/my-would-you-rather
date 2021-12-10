import { useEffect } from 'react'
import { connect } from 'react-redux'


import { load } from '../Actions/Share'
import AppRouter  from '../Routes/index'

import LinearProgress from '@mui/material/LinearProgress'

const App = props => {

  const { dispatch } = props
  useEffect(() => dispatch(load()), [dispatch])
  const loading = Object.keys(props.questions).length

  return (
    <>
      {loading !== 0 ? (<>

        <AppRouter authentication={props.authentication} />
      </>) : <LinearProgress color="warning" />

      }
    </>
  )
}


const mapStateToProps = state => {
  const { questions, authentication } = state

  return {
    questions,
    authentication
  }
}


export default connect(mapStateToProps)(App)
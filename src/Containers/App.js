import { useEffect } from 'react'
import { connect } from 'react-redux'

import LinearProgress from '@mui/material/LinearProgress'

import { load } from '../Actions/Share'
import AppRouter from '../Routes/index'


const App = props => {

  const { load } = props
  useEffect(() => load(), [load])

  return (
    <>
      {props.loading !== 0 ? (<>
        <AppRouter />
      </>) : <LinearProgress color="warning" />

      }
    </>
  )
}


const mapStateToProps = ({ questions }) => ({
  loading: Object.keys(questions).length
})


const mapDispatch = dispatch => ({ load: () => dispatch(load()) })

export default connect(mapStateToProps, mapDispatch)(App)
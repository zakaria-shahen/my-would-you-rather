import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router'


import { load } from '../Actions/Share'
import Navbar from '../Components/Navbar'
import LinearProgress from '@mui/material/LinearProgress'

const App = props => {

  const { dispatch } = props
  useEffect(() => dispatch(load()), [dispatch])
  const loading = Object.keys(props.questions).length

  return (
    <>
      {loading !== 0 ? (<>
        <Navbar />

        <Outlet />
      </>) : <LinearProgress color="warning" />

      }
    </>
  )
}


const mapStateToProps = state => {
  const { questions } = state

  return {
    questions
  }
}


export default connect(mapStateToProps)(App)
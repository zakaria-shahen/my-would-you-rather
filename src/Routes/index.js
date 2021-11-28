import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import App from '../Contraners/App'
import Login from '../Components/Login'
import Add from '../Components/Add'
import LeaderBoard from '../Components/LeaderBoard'
import Question from '../Components/Question'
import NotFound from '../Components/NotFound'



const AppRouter = props => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={
                        <>
                            {
                                !props.authentication && <Login />
                            }

                            {
                                props.authentication && <Navigate replace to="/LeaderBoard" />

                            }
                        </>

                    } />

                    {
                        props.authentication && (<>

                    <Route path="/Add" element={<Add />} />
                    <Route path="/LeaderBoard" element={<LeaderBoard />} />
                    <Route path="/Question:id" element={<Question />} />

                        </>)
                    }
                    
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

AppRouter.propTypes = {
    authentication: PropTypes.string
}

const mapStateToProps = state => {
    const { authentication } = state
    return {
        authentication
    }
}


export default connect(mapStateToProps)(AppRouter)
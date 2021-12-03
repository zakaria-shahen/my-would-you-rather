import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '../Containers/App'
import Login from '../Components/Login'
import Add from '../Components/Add'
import LeaderBoard from '../Components/LeaderBoard'
import Home from '../Components/Home'
import QuestionDetails from '../Components/QuestionDetails'
import NotFound from '../Components/NotFound'
import NewUser from '../Components/NewUser'


const AppRouter = props => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >

                    {
                        props.authentication && (<>

                            <Route path="/" element={<Home />} />
                            <Route path="/Add" element={<Add />} />
                            <Route path="/LeaderBoard" element={<LeaderBoard />} />
                            <Route path="/question/:id" element={<QuestionDetails />} />

                        </>)
                    }

                    {
                        !props.authentication && (<>

                            <Route path="/NewUser" element={<NewUser />} />
                            <Route path="/" element={<Login />} />

                        </>)
                    }

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>)

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
import { useLocation, Navigate } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedRouter = ({ children, authentication }) => {
    const location = useLocation()

    return authentication ? children 
        : (<Navigate to="/Login" replace state={{ path: location.pathname }} />)
}



ProtectedRouter.propTypes = {
    authentication: PropTypes.string
}

const mapStateToProps = state => ({
    authentication: state.authentication
})

export default connect(mapStateToProps, null)(ProtectedRouter)

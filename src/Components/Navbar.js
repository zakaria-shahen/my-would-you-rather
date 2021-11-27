import { connect } from 'react-redux'
import { PropsTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { logout } from '../Actions/Authentication'

export const Navbar = props => {
    const { authentication, dispatch } = props
    const handleLogout = event => {
        dispatch(logout())
    }
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
                {
                    !authentication && (<li><Link to="/Login">Login</Link></li>)
                }

                {
                    authentication && (<li onClick={handleLogout}>Logout</li>)
                }

            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    dispatch: PropsTypes.func.isRequired,
    authentication: PropsTypes.string
}

export default connect()(Navbar)
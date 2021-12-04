import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../Actions/Authentication'

// import logo from '../vote.png'
import '../Navbar.css'


export const Navbar = props => {
    const { authentication, dispatch } = props
    const navigate = useNavigate()

    const handleLogout = event => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <header>

            <nav>
                <ul>

                    {
                        !authentication && (
                            <>
                                <li><NavLink to="/">Login</NavLink></li>
                                <li><NavLink to="/NewUser">New User</NavLink></li>
                            </>)
                    }

                    {
                        authentication && (
                            <>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/LeaderBoard">LeaderBoard</NavLink></li>
                                <li><NavLink to="/Add">Add</NavLink></li>
                                <li><a href="#Logout" onClick={handleLogout}>Logout</a></li>
                            </>)
                    }

                </ul>
            </nav>

            
            {authentication && (<div className="username">
                <h4>{props.authentication}</h4>
            </div>)}
        </header >
    )
}

Navbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authentication: PropTypes.string
}

const mapStateToProps = state => {
    const { authentication } = state
    return {
        authentication
    }
}

export default connect(mapStateToProps)(Navbar)
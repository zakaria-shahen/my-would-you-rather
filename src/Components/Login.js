import { PropTypes } from 'react-redux'
import { connect } from 'react-redux'
import { Login } from '../Actions/Authentication'


const LoginComponent = props => {

    const handleLogin = event => {
        event.preventDefault()
        const username = event.target.selected
        props.dispatch(Login(props.users[username]))
        
        // TODO: redirect to Home LeaderBoard
        
    }


    return (
        <div class={"Login"}>
            <form>
                <select id='username'>
                {/* TODO: create state 'username' */}
                    {props.usersIDs.map(id => (
                        <option key={id} value={id}>{props.users[id].name}</option>
                    ))}
                </select>

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

LoginComponent.propTypes = {
    users: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    const { users } = state
    return {
        usersIDs: Object.keys(users),
        users
    }
}


export default connect(mapStateToProps)(LoginComponent)
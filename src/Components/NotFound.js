import { Link } from 'react-router-dom'

const NotFound = props => {


    return (
        <div>
            <h1>Not Found Page OR Not Login</h1>
            <p>
                if not Login. <Link to="/Login">Click Here</Link>
            </p>
        </div>
    )
}
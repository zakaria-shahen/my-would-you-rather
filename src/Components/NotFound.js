import { Link } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error';

const NotFound = props => {


    return (
        <div style={{ margin: "15px auto", width: "80%"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <ErrorIcon sx={{ fontSize: "100px", marginRight: "20px" }} color="warning" />
                <h1>404: Page Not Found OR Not Login</h1>

            </div>
            <p>
                if not Login. <Link to="/Login">Click Here</Link>
            </p>
        </div>
    )
}

export default NotFound
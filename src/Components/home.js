import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Box
} from '@mui/material'

import UserCard from './UserCard'

const Home = props => {
    const css = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px",
    }

    return (
        <Box sx={css}>
            { props.SortUsersId.map(id => <UserCard user={props.users[id]} />) }
        </Box>
    )
}

Home.propTypes = {
    users: PropTypes.object,
    SortUsersId: PropTypes.array
}


const mapStateToProps = ({ users }) => {
    //  Sort 
    const UsersIds = Object.keys(users)
    const SortUsersId = UsersIds.sort((idOne, idTwo) => {
        const scoresOne = users[idOne].questions.length + Object.keys(users[idOne].answers).length
            , scoresTwo = users[idTwo].questions.length + Object.keys(users[idTwo].answers).length
        return scoresOne - scoresTwo
    })

    return { users, SortUsersId }
}


export default connect(mapStateToProps)(Home)
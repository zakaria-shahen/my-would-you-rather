import PropTypes from 'prop-types'
import { Box, Avatar } from '@mui/material'
// import LinearProgressWithLabel from './LinearProgressWithLabel'


const UserCard = props => {

    const { id, name, avatarURL, questions, answers } = props.user
    const questionsNumber = questions.length
    const answeredNumber = Object.keys(answers).length

    return (
        <Box>
            <Box>
                <Avatar alt={name} src={avatarURL} />
            </Box>
            <Box>
                <h3>{name}</h3>
                <ul>
                    <li>
                        <span>Your Questions</span>
                        <span>{questionsNumber}</span>
                    </li>
                    <li>
                        <span>Answered Questions</span>
                        <span>{answeredNumber}</span>
                    </li>
                </ul>
            </Box>
            <Box>
                <div>
                    <div>Score</div>
                    <div>{ questionsNumber + answeredNumber }</div>
                </div>
            </Box>
        </Box>)
}


UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        avatarURL: PropTypes.string,
        questions: PropTypes.array,
        answers: PropTypes.object
    }).isRequired
}

export default UserCard
import PropTypes from 'prop-types'
import { Box, Avatar } from '@mui/material'


const UserCard = props => {

    const { name, avatarURL, questions, answers } = props.user
    const questionsNumber = questions.length
    const answeredNumber = Object.keys(answers).length
    const css = {
        ":hover": {
            background: "#264653",
            transitionDuration: "500ms",
            transitionProperty: "background"

        },
        width: "500px",
        background: "#dc852c",
        color: "#fff",
        borderRadius: "10px",
        margin: "15px auto",
        padding: "25px",
        display: "flex",
        alignItems: "center",
        "ul": {
            padding: 0,
            "li": {
                listStyle: "none",
                display: "flex",
                marginBottom: "8px",
                "span:nth-of-type(1n)": {
                    width: "170px"
                },
                "span:nth-of-type(2n)": {
                    width: "20px"
                }

            }
        },
        
    }
    return (
        <Box sx={css}>
            <Box sx={{flexGrow: "3"}}>
                <Avatar sx={{width: "120px", height: "120px"}} alt={name} src={avatarURL} />
            </Box>
            <Box sx={{flexGrow: "4"}}>
                <h3>{name}</h3>
                <ul>
                    <li>
                        <span>Create Questions</span>
                        <span>{questionsNumber}</span>
                    </li>
                    <li>
                        <span>Answered Questions</span>
                        <span>{answeredNumber}</span>
                    </li>
                </ul>
            </Box>
            <Box sx={{flexGrow: "3", textAlign: "center"}}>
                <Box>
                    <div>Score</div>
                    <div>{questionsNumber + answeredNumber}</div>
                </Box>
            </Box>
        </Box>)
}


UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        avatarURL: PropTypes.string,
        questions: PropTypes.array,
        answers: PropTypes.object
    }).isRequired
}

export default UserCard
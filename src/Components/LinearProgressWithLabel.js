import { PropTypes } from 'prop-types'
import { Box, LinearProgress } from '@mui/material'

const LinearProgressWithLabel = props => {
    return (
        <Box sx={{ display: 'flex', alignItems: '' }}>
            <Box sx={{ width: '100%', mr: 1}}>
                <LinearProgress  sx={{marginBottom: "8px"}} variant="determinate" value={props.value} />
                <span>{`${parseInt(props.value)}% - ${props.number} Votes`} </span>
                
            </Box>


        </Box>
    )
}

LinearProgressWithLabel.propTypes = {
    number: PropTypes.number,
    value: PropTypes.number.isRequired
}


export default LinearProgressWithLabel


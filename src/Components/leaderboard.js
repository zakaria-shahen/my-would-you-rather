import { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Questions from './Questions'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'


const LeaderBoard = props => {

    const [filterBy, setFilterBy] = useState("1")

    const handleChangeFilter = event => {
        const value = event.target.value
        if (filterBy === value) {
            return
        }
        
        setFilterBy(value)
    }

    return (
        <div className="leaderBoard">
            <ToggleButtonGroup
                value={filterBy}
                onChange={handleChangeFilter}
                color="warning"
                exclusive
                sx={{ display: "flex" }}>
                <ToggleButton sx={{ flexGrow: "1" }} value="1">unAnswered</ToggleButton>
                <ToggleButton sx={{ flexGrow: "1" }} value="2">answered</ToggleButton>
            </ToggleButtonGroup>
            <Questions filterBy={filterBy} />

        </div>
    )
}

LeaderBoard.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect()(LeaderBoard)
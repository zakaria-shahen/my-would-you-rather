import { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Questions from './Questions'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'


const LeaderBoard = props => {

    const [filterBy, setFilterBy] = useState("unanswered")

    const handleChangeFilter = event => {
        const value = event.target.innerText.toLowerCase()
        if (filterBy === value) {
            return
        }

        setFilterBy(value)
    }

    return (
        <div className={"leaderBoard"}>
            <>
                <ToggleButtonGroup
                    value={filterBy}
                    onChange={handleChangeFilter}
                    color="warning"
                    exclusive
                    style={{ display: "flex" }}>
                    <ToggleButton style={{ flexGrow: "1" }} value="unanswered">unAnswered</ToggleButton>
                    <ToggleButton style={{ flexGrow: "1" }} value="answered">answered</ToggleButton>
                </ToggleButtonGroup>
            </>
            <Questions filterBy={filterBy} />

        </div>
    )
}

LeaderBoard.propTypes = {
    dispatch: PropTypes.func.isRequired

}


export default connect()(LeaderBoard)
import { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Questions } from './Questions'

const LeaderBoard = props => {

    const [filterBy, setFilterBy] = useState("unAnswer")

    const handleChangeFilter = event => {
        const value = event.target.id
        if (filterBy === value) {
            return
        }

        setFilterBy(value)
    }

    return (
        <div class={"leaderBoard"}>
            <div>
                <ul>
                    <li onClick={handleChangeFilter} id="unAnswer">answered</li>
                    <li onClick={handleChangeFilter} id="answer">unanswered</li>
                </ul>
            </div>

            <Questions filterBy={filterBy} />

        </div>
    )
}

LeaderBoard.propTypes = {
    dispatch: PropTypes.func.isRequired

}


export default connect()(LeaderBoard)
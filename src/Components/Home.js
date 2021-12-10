import { useState } from 'react'
import Questions from './Questions'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'


const Home = props => {

    const [filterBy, setFilterBy] = useState("1")

    const handleChangeFilter = event => {
        const value = event.target.value
        if (filterBy === value) {
            return
        }

        setFilterBy(value)
    }

    return (
        <div className="Home">
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


export default Home
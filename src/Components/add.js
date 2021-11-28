import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addQuestion } from '../Actions/Question'

const Add = props => {
    const [newQuestion, setNewQuestion] = useState({
        optionOne: '',
        optionTwo: ''
    })


    const handleChangeOption = event => {
        const key = event.target.id
        const value = event.target.value
        setNewQuestion({ [key]: value })
    }

    const handleAddQuestion = event => {
        event.preventDefault()
        if (newQuestion.optionOne === undefined || newQuestion.optionTwo === undefined) {
            return
        }

        // { optionOneText, optionTwoText, author }
        props.dispatch(addQuestion({
            optionOneText: newQuestion.optionOne,
            optionTwoText: newQuestion.optionOne,
            author: props.author
        }))
    }

    return (
        <div>
            <form>
                <label>would you rather</label>
                <input onChange={handleChangeOption} id={"optionOne"} value={newQuestion.optionOne} />
                <input onChange={handleChangeOption} id={"optionOne"} value={newQuestion.optionTwo} />

                <button onClick={handleAddQuestion}>Save Question</button>
            </form>
        </div>
    )
}

Add.propTypes = {
    dispatch: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        author: state.Authentication
    }
}


export default connect(mapStateToProps)(Add)


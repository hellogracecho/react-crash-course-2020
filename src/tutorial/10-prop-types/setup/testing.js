import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
    return (
        <div>
            
        </div>
    )
}

testing.propTypes = {
    // ** emet: ptar
    name: PropTypes.array.isRequired,
    // ** emet: ptnr
    price:PropTypes.number.isRequired,
}

export default testing

import React from "react"
import PropTypes from "prop-types"

const CardHolder = ({ children }) => {
  return (
    <div className="bborder container my-12 mx-auto px-4 md:px-12">
      <div className="bborder flex flex-wrap -mx-1 lg:-mx-4">{children}</div>
    </div>
  )
}

export default CardHolder

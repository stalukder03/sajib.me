import React from 'react'

const Loading = () => {
  return (
    <div className="loader-wrap">
        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
            <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
            <circle cx="170" cy="170" r="135" stroke="#404041"/>
            <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
            <circle cx="170" cy="170" r="85" stroke="#404041"/>
        </svg>
    </div>
  )
}

export default Loading
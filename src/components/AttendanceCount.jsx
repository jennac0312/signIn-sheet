import React from 'react'

function AttendanceCount(props) {
  return (
    <div>
      <h3>Total Learners Present: {props.learners.length} </h3>
    </div>
  )
}

export default AttendanceCount

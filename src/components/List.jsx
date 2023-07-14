import React from 'react'
import ListItem from './ListItem'

function List(props) {
  return (
    <div>
    <h3>Students who are present: </h3>
    <ul>

        {/* can do turnary with null else */}
        {props.learners.length > 0 && props.learners.map((learner, i) => {
            return(
                <ListItem key={i} learner={learner}/>
            )
        })}
    </ul>
    </div>
  )
}

export default List

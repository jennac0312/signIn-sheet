// import React, { useState } from 'react'
    // same as this
import React from 'react'
import { useState } from 'react'

function SignInForm(props) {
    // all logic goes here

    // states... here because this is the only component that needs access to state data
    const [ data, setData ] = useState('')

    // have to track form data as it changes
    const handleChange = (event) => {
      // console.log(e.target.value)
      setData(event.target.value)
      console.log(data)
    }

    // have to grab form data as submits
    const handleSubmit = (event) => {
      event.preventDefault() //take event and prevent default of refreshing
      // spread previous learners array and add new data
      props.setLearners([...props.learners, data])
      setData('') //set data back to a blank page
    }

  return (
    // form is what needs onSubmit.. not the input submit "button"
    <form  onSubmit={(e) => handleSubmit(e)}>
      <h1>Who is signing in?</h1>
      <input type="text" name="name" 
      placeholder='Your Name Here' 
      onChange={ (e) => handleChange(e) } 
      value={data}/> {/* value acts like placeholder but is actually typed in the input (oooh and cant be typed over apparently)*/}
      <input type="submit" 
      value="Submit"/>
    </form>
  )
}

export default SignInForm

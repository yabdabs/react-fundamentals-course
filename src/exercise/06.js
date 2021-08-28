// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // extra credit 1 - using refs to get value of input
  // extra credt 2 - validating input using useState and refs
  // extra credit 3 - control the user input by lowercasing all inputs - input normalization instead of showing field error
  
  // ec2  
  // const [inputErr, setInputErr] = React.useState(false)
  // ec3
  const [inputVal, setInputVal] = React.useState('')
  const testRef = React.useRef('')
  const handleSubmit = (event) => {
    event.preventDefault()

    // Exercise
    // onSubmitUsername(event.target.elements[0].value)

    // ec1 - using refs
    onSubmitUsername(testRef.current.value)


  }

  const handleChange = (event) => {
    const { value } = event.target

    // ec2
    // const isValid = value === value.toLowerCase()
    // setInputErr(isValid ? false : 'Lower case letters only')

    setInputVal(value.toLowerCase())
  }
  

  return (
    <form onSubmit={ handleSubmit }>
		<div>
			<label
				htmlFor="inputTest"
			>
				Username:
			</label>
			<input
				type="text"
				id="inputTest"
				ref={ testRef }
				onChange={(e) => handleChange(e) }
        value={ inputVal }
			/>
		</div>
    {/* ec2 */}
		{/* {
			inputErr && 
				<span
					role="alert"
					className="error-message"
				>
					{ inputErr }
				</span>
		} */}
      
		<button
			type="submit"
      // ec2
			// disabled={ inputErr }        
		>
			Submit
		</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

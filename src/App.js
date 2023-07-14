import { useState } from 'react';
import './App.css';
import SignInForm from './components/SignInForm'; 
import List from './components/List';
import AttendanceCount from './components/AttendanceCount';

//if {} that means what we're importing is being destructured

function App() {
  // list of class
  const [learners, setLearners] = useState([])

  return (
    <div className="App">
      <SignInForm setLearners={setLearners} learners={learners}/> {/* passing function as prop to be able to update learners inside component */}
      {/* ListItem */}
      <List learners={learners}/>
      <AttendanceCount learners={learners} />

    </div>
  );
}

export default App;

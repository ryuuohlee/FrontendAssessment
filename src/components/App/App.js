import React from 'react';
import './App.css';
import StudentList from '../Students/StudentList.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => this.setState({ students: data }));
  }

  render() {
    let {students} = this.state;

    console.log(students)
    return (
      <div className="App">
        <div className='student-container'>
          <StudentList students={students} />
        </div>
      </div>
    );
  }
}

export default App;

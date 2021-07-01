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
    .then(data => this.setState({ students: data}));
    console.log(this.students)
  }

  render() {
    let {students} = this.state;

    return (
      <div className="App">
       <StudentList students={students} />
      </div>
    );
  }
}

export default App;

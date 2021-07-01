import React from 'react';
import './App.css';
import StudentList from '../Students/StudentList.js';
import Search from '../Search/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      searchField: '',
    }
  }


  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => {return response.json()})
    .then(data => {
        this.setState({ students: data })
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const {students, searchField} = this.state;
    const filteredStudents = students.filter(student => {
      return student.concat(student.firstName, ' ', student.lastName).toLowerCase().includes(searchField.toLowerCase());
    })

    return !students ? <h1>Loading...</h1> :
      (
        <div className="App">
          <div className='student-container'>
            <Search searchChange={this.onSearchChange} />
            <StudentList students={filteredStudents} />
          </div>
        </div>
      );
  }
}

export default App;

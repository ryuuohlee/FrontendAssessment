import React from 'react';
import './App.css';
import StudentList from '../Students/StudentList.js';
import Search from '../Search/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      tags:[["tag1", "tag2"]],
      searchField: '',
      tagSearchField: '',
      isActive: false
    }
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => {return response.json()})
    .then(data => {
        this.setState({ students: data.students })
    })
    .catch(error => console.log(error));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  onTagSearchChange = (event) => {
    this.setState({ tagSearchField: event.target.value });
  }

  onOpen = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state.isActive)
  }

  render() {
    const {students, tags, searchField, tagSearchField, isActive} = this.state;
    const filteredStudents = (!!(students.filter(student => {
      return student.firstName.concat(' ', student.lastName).toLowerCase().includes(searchField.toLowerCase())})) ? students.filter(student => {
      return student.firstName.concat(' ', student.lastName).toLowerCase().includes(searchField.toLowerCase())}) : students);
    const filteredTags = (!!(tags.filter(tags => {
      return tags.includes(tagSearchField.toLowerCase())})) ? tags.filter(tags => {
      return tags.includes(searchField.toLowerCase())}) : tags);


    return students.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
          <div className='student-container'>
            <Search searchChange={this.onSearchChange} tagSearchChange={this.onTagSearchChange}/>
            <StudentList students={filteredStudents} showGrades={isActive} onOpen={this.onOpen} />
          </div>
        </div>
      );
  }
}

export default App;

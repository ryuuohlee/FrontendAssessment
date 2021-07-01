import React from 'react';
import StudentCard from './StudentCard.js'

const StudentList = (props) => {
  let {students} = props.students;
  return(
    <div>
      {console.log(students)}
    </div>
  )
}

export default StudentList;
import React from 'react';
import StudentCard from './StudentCard.js'

const StudentList = (props) => {
  let {students} = props.students;
  console.log(students);
  if(students === undefined) {
    return(
      <div>
        loading...
      </div>
    )
  }
  else {
    return(
      <div className='student-list'>
        {students.map(student => <StudentCard
          city={student.city}
          company={student.company}
          email={student.email}
          firstName={student.firstName}
          grades={student.grades}
          id={student.id}
          lastName={student.lastName}
          pic={student.pic}
          skill={student.skill}
          key={student.id} />
          )}
      </div>
    )
  }
}

export default StudentList;
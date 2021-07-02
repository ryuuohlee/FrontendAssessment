import React from 'react';
import StudentCard from './StudentCard.js';
import './Students.css';

const StudentList = (props) => {
  const {students, showGrades, onSubmit} = props;
    return (
      <div className='student-list' id='style'>
        {students.map(student => <StudentCard
          company={student.company}
          email={student.email}
          firstName={student.firstName}
          grades={student.grades}
          id={student.id}
          lastName={student.lastName}
          pic={student.pic}
          skill={student.skill}
          showGrades={showGrades}
          onSubmit={onSubmit}
          key={student.id} />
          )}
      </div>
    )
}

export default StudentList;
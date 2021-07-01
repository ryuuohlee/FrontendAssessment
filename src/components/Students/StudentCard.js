import React from 'react';

const StudentCard = (props) => {
  let { company, email, firstName, grades, lastName, pic, skill } = props;
  return(
    <div className='student-card'>
      <div className='student-image'>
        <img className='student-pic' src={pic} alt='' />
      </div>
      <div className="student-info">
        <h1 className='student-name'>
            {firstName} {lastName}
        </h1>
        <div className="student-stats">
          <div className='student-email'>
            Email: {email}
          </div>
          <div className='student-company'>
            Company: {company}
          </div>
          <div className='student-skill'>
            Skill: {skill}
          </div>
          <div className="student-grade">
            Average: {(grades.map(grade => parseInt(grade)).reduce((acc, curr) => acc + curr) / grades.length)}%
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard;
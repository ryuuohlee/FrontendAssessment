import React from 'react';

const StudentCard = (props) => {
  let { company, email, firstName, grades, lastName, pic, skill } = props;
  return(
    <div className='student-card'>
      <div className='student-image'>
        <img src={pic} alt='' />
      </div>
      <div className='student-name'>
        <p>
          {firstName}
          {lastName}
        </p>
      </div>
      <div className='student-email'>
        Email:{email}
      </div>
      <div className='student-company'>
        {company}
      </div>
      <div className='student-skill'>
        {skill}
      </div>
      <div className="student-grade">
        Average: {(grades.map(grade => parseInt(grade)).reduce((acc, curr) => acc + curr) / grades.length)}%
      </div>
    </div>
  )
}

export default StudentCard;
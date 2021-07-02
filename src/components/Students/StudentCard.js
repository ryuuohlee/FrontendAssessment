import React, {useState} from 'react';
import Grades from '../Grades/Grades.js';

const StudentCard = (props) => {
  let { company, email, firstName, grades, lastName, pic, skill, id, onSubmit} = props;
  let test = 1;
  let [isActive, setActive] = useState(false);
  let [tag, setTag] = useState('')

  return(
    <div className='student-card'>
      <div className='student-data'>
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
            {isActive && <div className='test-scores'>{grades.map((grade) =>
              <Grades grade={grade} test={test++} key={id.concat(firstName,lastName)}/>
            )} </div>}
            <input
              className='add-tag'
              type='text'
              placeholder='Add Tag'
              onSubmit={()=>onSubmit}
               />
          </div>
        </div>
      </div>
      <div className='accordion'>
        <button
        className='accordion-button'
        onClick={()=>setActive(!isActive)}>
          {isActive ? '-' : '+'}
        </button>
      </div>
    </div>
  )
}

export default StudentCard;
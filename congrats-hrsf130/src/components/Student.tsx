import React from 'react';
import Students from '../types/StudentsInfo';
import '../App.css';
import { DisplayName } from '../styles/styled';

const Student = ({ name }: Students) => {
  return (
    <div className='float'>
      <DisplayName>{name}</DisplayName>
    </div>
  )
}

export default Student;
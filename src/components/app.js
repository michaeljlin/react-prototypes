import React from 'react';
import Table from './table';

const students = [
    {name: 'Michael', course: 'LearningFuze', grade: 85},
    {name: 'Mary', course: 'Math', grade: 91},
    {name: 'Mark', course: 'English', grade: 70}];

export default function App(){
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div> )
}


import React from 'react';

export default function gradeTable(props){
    // console.log(props);

    const tableRows = props.data.map(function(item, index ){
        // console.log(item);
        // console.log(index);
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        );
    });

    return(
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>*/}
                    {/*<td>Michael</td>*/}
                    {/*<td>LearningFuze</td>*/}
                    {/*<td>89</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                    {/*<td>Mary</td>*/}
                    {/*<td>Math</td>*/}
                    {/*<td>91</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                    {/*<td>Matt</td>*/}
                    {/*<td>English</td>*/}
                    {/*<td>95</td>*/}
                {/*</tr>*/}

                {tableRows}
            </tbody>
        </table>
    )
}
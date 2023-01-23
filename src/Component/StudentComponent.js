import React from 'react'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'


const StudentComponent = () => {
  return (
    <table className='table table-bordered border-dark'>
      <thead style={{"background-color":"#adb5bd"}}>
        <th colSpan={2}> <h4 >Student Details</h4></th>
      </thead>
      <tbody>
        <tr>
          <td>
            <FormComponent/>
          </td>
          <td>
            <TableComponent/>
          </td>
        </tr>
      </tbody>
    </table>      
  )
}

export default StudentComponent
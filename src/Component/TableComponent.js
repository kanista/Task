import React from 'react'

const TableComponent = () => {
  return (
    <div style={{padding:"4%"}}>
        <table className="table table-bordered border-dark text-center" >
            <thead>
                <tr >
                <th className="col-xs-1">ID</th>
                <th className="col-xs-1">Name</th>
                <th className="col-xs-1">Gender</th>
                <th className="col-xs-1">City</th>
                <th className="col-xs-1">Comment</th>
                <th className="col-xs-1">Action</th>
                </tr> 
            </thead>
            <tbody>
              <tr >
                <td>1</td>
                <td>Kani</td>
                <td>Female</td>
                <td>Jaffna</td>
                <td>hello! how are you?</td>
                <td>
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-danger" style={{marginLeft:"20px"}}>Delete</button>
                </td>
              </tr>     
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent
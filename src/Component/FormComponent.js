import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';


const FormComponent = () => {

  const options =   
[  
  { value: 'colombo', label: 'Colombo' },  
  { value: 'jaffna', label: 'Jaffna' },  
  { value: 'vavuniya', label: 'Vavuniya' } ,
  { value: 'kandy', label: 'Kandy' } 
]  

  return (
 
<div style={{padding:"4%"}}>
  <form >
    <div className="row">
      <label className="col-sm-3 control-label">
          Name
      </label>
      <div className="col-sm-8">
           <input type="name" className="form-control"/>
       </div>
    </div>
    <br/>
     <div className="row">
      <label className="col-sm-3 control-label">
          Gender
      </label>
      <div className="radio col-sm-8">
        <input type="radio" value="male" name="gender" />
        <label style={{marginLeft:"30px"}}>
             Male
        </label>
        <input type="radio" value="female" name="gender" style={{marginLeft:"20px"}}/>
        <label style={{marginLeft:"30px"}}>
             Female
        </label>
       </div>
    </div>
    <br/>
    <div className="row">
      <label className="col-sm-3 control-label">
          City
      </label>
      <div className="select-container col-sm-8 ">
          <Select options={options}/>  
       </div>
    </div>
    <br/>
    <div className='row'>
      <label className='col-sm-3 control-label'>
        Comment
      </label>
      <div className='col-sm-8'>
        <textarea className='form-control rounded-0' rows="6"></textarea>
      </div>
    </div>
    <br/>
      <div className='row'>
        <div className="col" style={{marginLeft:"70%"}}>
          <button type="button" className="btn btn-outline-success ">Submit</button>
        </div>
      </div>
    </form>
 </div>
  )
}

export default FormComponent
import React from 'react'


const Filters = (props) => (
  <div className="container">
    <div className="col-3 form-group">
      <div className="form-group">
      </div>
    </div>
    <input onChange={()=>props.setFechaInicio(new Date())} className="col-3 form-input" id="input-example-14"  type="date"/>
    <input onChange={()=>console.log(props)} className="col-3 form-input" id="input-example-14"  type="date"/>  
  
  </div>
);

export default Filters;

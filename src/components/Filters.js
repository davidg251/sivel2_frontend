import React from "react";

const Filters = () => (
  <div className="container">
    <div className="col-3 form-group">
      <div className="form-group">
        <select className="form-select">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
    </div>
    
    <input className="col-3 form-input" id="input-example-14" value="2016-12-31" type="date"/>
    <input className="col-3 form-input" id="input-example-14" value="2016-12-31" type="date"/>  
  
  </div>
);

export default Filters;
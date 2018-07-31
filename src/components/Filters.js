import React from "react";

const Filters = () => (
  <div className="container">
    <div className="col-3 form-group">
      <div class="form-group">
        <select class="form-select">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
    </div>
    
    <input classname="col-3 form-input" id="input-example-14" value="2016-12-31" type="date"/>
    <input classname="col-3 form-input" id="input-example-14" value="2016-12-31" type="date"/>  
  
  </div>
);

export default Filters;
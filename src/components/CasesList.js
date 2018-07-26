import React from "react";
import Instance from './Instance'

const CasesList = ({cases}) => (
  <div>
    <h1>Casos</h1>
    {cases.map(instance =>
      <Instance
        key={instance.id}
        {...instance}
      />
    )}
  </div>
);

export default CasesList;

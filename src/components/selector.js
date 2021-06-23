import React from 'react'

import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'



const Selector = ({onChange, label, selected, all, options, type}) => {
  
  if (!options) {
    options = {
      on: "On",
      off: "Off"
    };
  }
  
  const elements = [<ToggleButton variant="link" disabled value="label">{label}: </ToggleButton>]
  .concat(Object.keys(options).map((key) => {
    return (
      <ToggleButton variant={all ? "warning" : "primary"} value={key}>{options[key]}</ToggleButton>
    );
  }));
  
  return (
    <ToggleButtonGroup name={label} type={ (type == 'checkbox' || type == 'picklist') ? 'checkbox' : 'radio' } value={all ? "" : selected} onChange={onChange} size="sm" className="selector">
      {elements}
    </ToggleButtonGroup>
  );
}

export default Selector;
import React from 'react'

import SequenceDiagram from 'react-sequence-diagram'

const Sequence = ({code}) => {
  return (
    <SequenceDiagram input={code} options={{theme: 'simple'}} />
  );
}

export default Sequence;
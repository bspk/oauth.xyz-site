import React from 'react'

import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

const Client = () => {
  return (
    <Badge pill variant="info">Client</Badge>
  );
};

const Browser = () => {
  return (
    <Badge pill variant="secondary">Browser</Badge>
  );
};

const AS = () => {
  return (
    <Badge pill variant="warning">AS</Badge>
  );
};

const RS = () => {
  return (
    <Badge pill variant="dark">RS</Badge>
  );
}

const toBadge = (from) => {
  if (from == 'client') {
    return (<Client />);
  } else if (from == 'browser') {
    return (<Browser />);
  } else if (from == 'as') {
    return (<AS />);
  } else if (from == 'rs') {
    return (<RS />);
  } else {
    return (<Badge pill variant="danger">?</Badge>);
  }
};

const Network = ({from, to}) => {
  const elements = [
    toBadge(from),
    '➡',
    toBadge(to)
  ];
  
  return (
  
    <Alert variant="dark" className="alert-network">
      {elements}
    </Alert>
  );
  
}

export default Network;
import React from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const Client = () => {
  return (
    <Badge pill variant="client">Client</Badge>
  );
};

const Browser = () => {
  return (
    <Badge pill variant="browser">Browser</Badge>
  );
};

const AS = () => {
  return (
    <Badge pill variant="as">AS</Badge>
  );
};

const RS = () => {
  return (
    <Badge pill variant="rs">RS</Badge>
  );
}

const asBadge = (el) => {
  if (el == 'client') {
    return (<Client />);
  } else if (el == 'browser') {
    return (<Browser />);
  } else if (el == 'as') {
    return (<AS />);
  } else if (el == 'rs') {
    return (<RS />);
  } else {
    return (<Badge pill variant="danger">?</Badge>);
  }
};

const Network = ({from, to, show, setShow}) => {
  const elements = [
    asBadge(from),
    '➡',
    asBadge(to)
  ];

  // TODO: change the network banner color based on the communication pair in play
  
  return (
    <Alert variant="dark" className={'alert-network alert-network-' + from + '-' + to + ' alert-network-showhide-' + show}>
      <Button variant="link" size="sm" onClick={() => setShow(!show)}>{ show ? '🔽' : '▶️ Show Code'}</Button>
      {elements}
    </Alert>
  );
  
}

export default Network;
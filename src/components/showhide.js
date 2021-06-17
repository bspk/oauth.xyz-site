import React from 'react'

import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const ShowHide = ({show, setShow}) => {
  return (
    <Alert variant="dark" className={'alert-showhide alert-showhide-' + show}>
      <Button variant="link" size="sm" onClick={() => setShow(!show)}>{ show ? '🔽' : '▶️ Show Code'}</Button>
    </Alert>
  );
  
}

export default ShowHide;
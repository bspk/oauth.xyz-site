import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({code}) => {
  const codeString = JSON.stringify(code, null, 4);

  return <SyntaxHighlighter language='javascript' style={okaidia}>{codeString}</SyntaxHighlighter>;  
};


export default Code;
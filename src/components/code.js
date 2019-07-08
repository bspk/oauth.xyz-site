import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Network from '../components/network';

const Code = ({code, codeString, from, to}) => {

  if (!codeString) {
    codeString = JSON.stringify(code, null, 4);
  }
  
  const elements = [];
  
  if (from || to) {
    elements.push(<Network from={from} to={to} />);
  }
  
  elements.push(<SyntaxHighlighter language='javascript' style={okaidia}>{codeString}</SyntaxHighlighter>);

  return elements;
  
};


export default Code;
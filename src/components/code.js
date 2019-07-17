import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Network from '../components/network';

const Code = ({code, codeString, from, to, language}) => {

  if (!language) {
    language = 'javascript';
  }

  if (!codeString) {
    codeString = JSON.stringify(code, null, 4);
  }
  
  if (from || to) {
    return ([
      <>
      <Network from={from} to={to} />
      <SyntaxHighlighter language={language} style={okaidia} customStyle={{marginTop: 0, borderRadius: "0 0 0.3rem 0.3rem"}}>{codeString}</SyntaxHighlighter>
      </>
    ]);
  } else {
    return (
      <SyntaxHighlighter language={language} style={okaidia}>{codeString}</SyntaxHighlighter>
    );
  }
  
};


export default Code;
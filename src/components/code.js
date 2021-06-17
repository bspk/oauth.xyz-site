import React, { useState } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Network from '../components/network';
import ShowHide from '../components/showhide';

const Code = ({code, codeString, from, to, language}) => {

  const [show, setShow] = useState(true);

  if (!language) {
    language = 'javascript';
  }

  if (!codeString) {
    codeString = JSON.stringify(code, null, 4);
  }
  
  if (show) {
    if (from || to) {
      return (
        <>
        <Network from={from} to={to} show={show} setShow={setShow} />
        <SyntaxHighlighter className="codeblock" language={language} style={okaidia}>{codeString}</SyntaxHighlighter>
        </>
      );
    } else {
      return (
        <>
        <ShowHide show={show} setShow={setShow} />
        <SyntaxHighlighter className="codeblock" language={language} style={okaidia}>{codeString}</SyntaxHighlighter>
        </>
      );
    }
  } else {
    if (from || to) {
      return (
        <Network from={from} to={to} show={show} setShow={setShow} />
      );
    } else {
      return (
        <ShowHide show={show} setShow={setShow} />
      );
    }
  }
};


export default Code;
import React from 'react'

const SelectorList = ({children}) => {
  const items = children.map((c, index) => {
    return (
      <li key={index}>{c}</li>
    );
  })
  
  return (
    <ul className="selectorList">
      {items}
    </ul>
  );
}

export default SelectorList;
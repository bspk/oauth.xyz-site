import React from 'react'

import Code from '../code.js'

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      demo: {
        baz: false
      }
    };
  }

  toggleBaz = (event) => {
    const target = event.target;
    
    const demo = this.state.demo;
    
    demo.baz = target.checked;
    
    this.setState({
      demo: demo
    });
    
  }

  render = () => {


    return (
      <div>
        <input type="checkbox" onChange={this.toggleBaz} /> Baz?
        <Code code={this.state.demo} />
      </div>
    );
  
  }

};

  
export default Component;
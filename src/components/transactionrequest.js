import React from 'react'

import Code from '../components/code.js'

class TransactionRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: {
        client: undefined,
        user: undefined,
        resources: undefined,
        interact: undefined,
        keys: undefined
      }
    };
  }

  changeClient = (event) => {
    
    const t = this.state.transaction;
    
    if (event.target.value === 'full') {
      t.client = {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      };
    } else if (event.target.value === 'handle') {
      t.client = {
        handle: "87ytghio0987yhjk"
      };
    } else {
      t.client = undefined;
    }
    
    this.setState({
      transaction: t
    });
    
  }

  changeInteract = (event) => {
  
    const t = this.state.transaction;
    
    if (event.target.value === 'full') {
      t.interact = {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      };
    } else if (event.target.value === 'handle') {
      t.interact = {
        handle: "87ytghio0987yhjk"
      };
    } else {
      t.interact = undefined;
    }
    
    this.setState({
      transaction: t
    });
    
  }

  changeResources = (event) => {
    
    const t = this.state.transaction;
    
    if (event.target.value === 'full') {
      t.resources = {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      };
    } else if (event.target.value === 'handle') {
      t.resources = {
        handle: "87ytghio0987yhjk"
      };
    } else {
      t.resources = undefined;
    }
    
    this.setState({
      transaction: t
    });
    
  }

  changeUser = (event) => {
    
    const t = this.state.transaction;
    
    if (event.target.value === 'full') {
      t.user = {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      };
    } else if (event.target.value === 'handle') {
      t.user = {
        handle: "87ytghio0987yhjk"
      };
    } else {
      t.user = undefined;
    }
    
    this.setState({
      transaction: t
    });
    
  }

  changeKeys = (event) => {
    
    const t = this.state.transaction;
    
    if (event.target.value === 'full') {
      t.keys = {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      };
    } else if (event.target.value === 'handle') {
      t.keys = {
        handle: "87ytghio0987yhjk"
      };
    } else {
      t.keys = undefined;
    }
    
    this.setState({
      transaction: t
    });
    
  }

  render = () => {


    return (
      <div>
        <Code code={this.state.transaction} />
        <Selector onChange={this.changeClient} label="Client" />
        <Selector onChange={this.changeInteract} label="Interact" />
        <Selector onChange={this.changeResources} label="Resources" />
        <Selector onChange={this.changeUser} label="User" />
        <Selector onChange={this.changeKeys} label="Keys" />
      </div>
    );
  
  }

};


const Selector = ({onChange, label}) => {
  return (
    <label>
      <select onChange={onChange}>
        <option value="full">Fully specified</option>
        <option value="handle">Handle</option>
        <option value="omit">Omit</option>
      </select>
      {label}
    </label>
  );
};
  
export default TransactionRequest;
import React from 'react'

import Code from '../components/code.js'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class TransactionRequest extends React.Component {

  codeValues = {
    client: {
      full: {
          name: "My Client Display Name",
          uri: "https://example.net/client"
      },
      handle: {
        handle: "87ytghio0987yhjk"
      }
    },
    
    interact: {
      full: {
        type: "redirect",
        callback: "https://client.example.net/return/123455",
        state: "98764389312-81341978d-1"
      },
      handle: {
        handle: "23409872543698-1345"
      }
    },
    
    user: {
      full: {
          assertion: "eyj0...",
          type: "oidc_id_token"
      },
      handle: {
        handle: "baabanealkjasdwfeasvd"
      }
    },
    
    resources: {
      full: [{
          name: "My Client Display Name",
          uri: "https://example.net/client"
      }],
      handle: [{
        handle: "87ytghio0987yhjk"
      }]
    },
    
    keys: {
      full: {
          name: "My Client Display Name",
          uri: "https://example.net/client"
      },
      handle: {
        handle: "87ytghio0987yhjk"
      }
    }
  }
  
  state = {
      transaction: {
        client: this.codeValues.client.full,
        user: this.codeValues.user.full,
        resources: this.codeValues.resources.handle,
        interact: this.codeValues.interact.omit,
        keys: this.codeValues.keys.omit
      },
      selected: {
        client: 'full',
        user: 'full',
        resources: 'handle',
        interact: 'omit',
        keys: 'omit'
      }
  }

  
  change = (field) => (value) => {
    const val = this.codeValues[field][value];
    
    const t = this.state.transaction;
    t[field] = val;
    
    const s = this.state.selected;
    s[field] = value;
    
    this.setState({
      transaction: t,
      selected: s
    });
    
  }
  
  render = () => {

    return (
      <div>
          <Selector onChange={this.change('client')} label="Client" selected={this.state.selected.client} /><br />
          <Selector onChange={this.change('interact')} label="Interact" selected={this.state.selected.interact}  /><br />
          <Selector onChange={this.change('resources')} label="Resources" selected={this.state.selected.resources} /><br />
          <Selector onChange={this.change('user')} label="User" selected={this.state.selected.user} /><br />
          <Selector onChange={this.change('keys')} label="Keys" selected={this.state.selected.keys} /><br />
          <Code code={this.state.transaction} />
      </div>
    );
  
  }

};

/*
const Selector = ({onChange, label, selected}) => {
  return (
    <label>
      <select value={selected} onChange={onChange}>
        <option value="full">Fully specified</option>
        <option value="handle">Handle</option>
        <option value="omit">Omit</option>
      </select>
      {label}
    </label>
  );
};
*/

const Selector = ({onChange, label, selected}) => {
  return (
    <ToggleButtonGroup name={label} value={selected} onChange={onChange}>
      <ToggleButton variant="link" disabled value="label">{label}: </ToggleButton>
      <ToggleButton variant="primary" value="full">Full</ToggleButton>
      <ToggleButton variant="primary" value="handle">Handle</ToggleButton>
      <ToggleButton variant="primary" value="omit">Omit</ToggleButton>
    </ToggleButtonGroup>
  );
}


  
export default TransactionRequest;
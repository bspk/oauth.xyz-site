import React from 'react'

import Code from '../components/code.js'
import Selector from '../components/selector.js'
import SelectorList from '../components/selectorlist.js'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

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
        resources: this.codeValues.resources.handle,
        interact: this.codeValues.interact.omit,
        keys: this.codeValues.keys.omit,
        user: this.codeValues.user.full
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

    // if we're toggling everything at once
    if (field == 'all') {
      this.change('client')(value);
      this.change('interact')(value);
      this.change('resources')(value);
      this.change('user')(value);
      this.change('keys')(value);
      return;
    }
    
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
          <SelectorList>
            <Selector onChange={this.change('client')} label="Client" selected={this.state.selected.client} />
            <Selector onChange={this.change('interact')} label="Interact" selected={this.state.selected.interact}  />
            <Selector onChange={this.change('resources')} label="Resources" selected={this.state.selected.resources} />
            <Selector onChange={this.change('user')} label="User" selected={this.state.selected.user} />
            <Selector onChange={this.change('keys')} label="Keys" selected={this.state.selected.keys} />
            <Selector onChange={this.change('all')} label="All" all />
          </SelectorList>
          <Code code={this.state.transaction} />
      </div>
    );
  
  }

};

export default TransactionRequest;
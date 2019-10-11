import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

class TransactionRequest extends React.Component {

  
  interactionValues = {
    label: 'Next Step',
    redirect: {
      redirect: {
        interaction_url: "https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",
        server_nonce: "MBDOFXG4Y5CVJCX821LH"
      }
    },
    user_code: {
      user_code: {
        url: "https://server.example.com/interact/device",
        code: "A1BC-3DFF"
      }
    },
    both: {
      redirect: {
        interaction_url: "https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",
        server_nonce: "MBDOFXG4Y5CVJCX821LH"
      },
      user_code: {
        url: "https://server.example.com/interact/device",
        code: "A1BC-3DFF"
      }
    },
    didcomm: {
      didcomm: {
        "...": "..."
      }
    },
    wait: {
      wait: 30
    },
    access_token: {
      access_token: {
          value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",
          type: "bearer"
      }
    }
  }

  codeValues = {
    handle: {
      label: 'Transaction Handle',
      on: {
        value: "80UPRY5NM33OMUKMKSKU",
        type: "bearer"
      }
    },
    
    display_handle: {
      label: 'Display Handle',
      on: {
        value: "VBUEOIQA82PBY2ZDJW7Q",
        type: 'bearer'
      }
    },
    user_handle: {
      label: 'User Handle',
      on: {
        value: "XUT2MFM1XBIKJKSDU8QM",
        type: 'bearer'
      }
    },
    
    resources_handle: {
      label: 'Resources Handle',
      on: {
        value: "KLKP36N7GPOKRF3KGH5N",
        type: 'bearer'
      }
    },
    
    key_handle: {
      label: 'Key Handle',
      on: {
        value: "7C7C4AZ9KHRS6X63AJAO",
        type: 'bearer'
      }
    },
    
    capabilities: {
      label: 'Capabilities',
      on: ['mtls', 'jwsd']
    }
  }
  
  state = {
    selected: {
      handle: 'on',
      interaction: 'redirect',
      display_handle: 'off',
      resources_handle: 'off',
      key_handle: 'on',
      user_handle: 'off',
      capabilities: 'off'
    }
  }

  
  change = (field) => (value) => {

    const s = this.state.selected;
    s[field] = value;
    
    if (field === 'handle' && value === 'off') {
      s.interaction = 'access_token';
    }
    
    if (field === 'interaction' && value !== 'access_token') {
      s.handle = 'on';
    }
    
    this.setState({
      selected: s
    });
    
  }
  
  render = () => {

    // build the transaction object based on the current selection
    const transaction = Object.keys(this.codeValues).reduce((result, key) => {
      result[key] = this.codeValues[key][this.state.selected[key]];
      return result;
    }, {});
    
    const interact = this.interactionValues[this.state.selected.interaction];
    
    const response = {...interact, ...transaction};
    
    
    // build next-step selector first
    const nextOptions = {
      redirect: "Redirect",
      user_code: "User Code",
      both: "Both",
      didcomm: "DIDComm",
      wait: "Wait",
      access_token: "Token"
    }
    
    // build the selectors
    const selectors = [
      <Selector onChange={this.change('interaction')} label={this.interactionValues.label} selected={this.state.selected.interaction} options={nextOptions} />
    ]
    .concat(Object.keys(this.codeValues).map((field) => {
      return (
        <Selector onChange={this.change(field)} label={this.codeValues[field].label} selected={this.state.selected[field]} />
      );
    }));

    
    
    
    return (
      <div>
          <SelectorList>
            {selectors}
          </SelectorList>
          <Code
            from="as" to="client"
            code={response} 
          />
      </div>
    );
  
  }

};

export default TransactionRequest;
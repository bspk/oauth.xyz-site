import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

class TransactionRequest extends React.Component {

  
  codeValues = {
    interaction: {
      label: 'Interaction',
      type: 'checkbox',
      interaction_url: "https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",
      callback_server_nonce: "MBDOFXG4Y5CVJCX821LH",
      pushback_server_nonce: "Y5CVJCX821LHMBDOFXG4",
      user_code: {
          url: "https://server.example.com/interact/device",
          code: "A1BC-3DFF"
      },
      options: {
        interaction_url: "Redirect",
        callback_server_nonce: "Callback",
        pushback_server_nonce: "Pushback",
        user_code: "Device",
        omit: 'Off'
      }
    },
    
    access_token: {
      label: 'Access Token',
      single: {
        access_token: {
            value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",
            proof: "bearer"
        }
      },
      multiple: {
        multiple_access_tokens: {
          token1: {
            value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",
            proof: "bearer"
          },
          token2: {
            value: "UFGLO2FDAFG7VGZZPJ3IZEMN21EVU71FHCARP4J1",
            proof: "bearer"
          }
        }
      },
      options: {
        single: 'Single',
        multiple: 'Multiple',
        off: 'Off'
      }
    },
    
    continue: {
      label: 'Continue',
      on: {
        handle: "80UPRY5NM33OMUKMKSKU",
        uri: "https://server.example.com/continue",
        wait: 60
      }
    },
    
    handles: {
      label: 'Handles',
      type: 'checkbox',
      display_handle: "VBUEOIQA82PBY2ZDJW7Q",
      user_handle: "XUT2MFM1XBIKJKSDU8QM",
      key_handle: "7C7C4AZ9KHRS6X63AJAO",
      options: {
        display_handle: 'Display',
        user_handle: 'User',
        key_handle: 'Key (client)'
      }
    },
    
    capabilities: {
      label: 'Capabilities',
      on: ['ext1', 'ext2']
    },
	
  	subject: {
  		label: 'Subject',
  		on: {
        "sub-ids": [ {
           "subject_type": "email",
           "email": "user@example.com",
        } ],
        assertions: {
           "oidc-id-token": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ"
        },
  			updated_at: '2020-01-01T12:43:29+0000',
  			auth_time: '2020-02-17T21:23:39+0000'
  		}
  	}
	
  }
  
  state = {
    selected: {
      continue: 'on',
      interaction: ['interaction_url', 'callback_server_nonce'],
      access_token: 'off',
      handles: [],
      capabilities: 'off',
      subject: 'off'
    }
  }

  
  change = (field) => (value) => {

    // if we're toggling everything at once
    if (field === 'all') {
      Object.keys(this.state.selected).forEach((field) => {
        this.change(field)(value);
      });
      return;
    }
	
    const s = this.state.selected;
	
    if (this.codeValues[field]) {
      if (this.codeValues[field].type === 'checkbox'
        && value.indexOf('omit') !== -1) {
        // turn off everything
        s[field] = [];
      } else {
        s[field] = value;
      }
    }
    
    if (field === 'handle' && value === 'off') {
      s.access_token = 'single';
      s.interaction = 'off';
    }
    
    if (field === 'interaction' && value !== 'off') {
      s.handle = 'on';
    }

    this.setState({
      selected: s
    });
    
  }
  
  render = () => {

    // build the transaction object based on the current selection
    const transaction = Object.keys(this.codeValues).reduce((result, key) => {
      if (this.codeValues[key].type === 'checkbox') {
        //result = {...result, ...this.codeValues[key][this.state.selected[key]]};
        if (this.state.selected[key].length > 0) {
  		    const res = Object.keys(this.codeValues[key])
            .filter(k => this.state.selected[key].indexOf(k) !== -1)
            .reduce((r, k) => {
              r[k] = this.codeValues[key][k];
              return r;
            }, {});
          result = {...result, ...res};
        }
      } else if (key === 'access_token') {
        result = {...result, ...this.codeValues[key][this.state.selected[key]]};
      } else {
        result[key] = this.codeValues[key][this.state.selected[key]];
      }
      return result;
    }, {});
    
    const response = {...transaction};
    
    // build the selectors
    const selectors = Object.keys(this.codeValues).map((field) => {
      return (
        <Selector onChange={this.change(field)} label={this.codeValues[field].label} selected={this.state.selected[field]} options={this.codeValues[field].options} type={this.codeValues[field].type} />
      );
    });

    
    
    
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
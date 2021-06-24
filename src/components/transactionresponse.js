import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

import { processCodeVal, CodeValueSelector } from '../components/codevalueselector'

class TransactionRequest extends React.Component {

  
  codeValues = {
    interact: {
      label: 'Interaction',
      type: 'checkbox',
      subkeys: ['start'],
      start: {
        start: {
          label: 'Start',
          type: 'checkbox',
          redirect: {
            redirect: "https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ"
          },
          app: {
            app: "https://app.example.com/launch?tx=4CF492MLV" 
          },
          user_code: {
            user_code: {
              url: "https://server.example.com/interact/device",
              code: "A1BC-3DFF"
            },
          },
          options: {
            redirect: 'Redirect',
            app: 'Launch App',
            user_code: 'User Code'
          }
        }
      },
      finish: {
        finish: "MBDOFXG4Y5CVJCX821LH"
      },
      options: {
        start: "Start",
        finish: "Finish",
        omit: 'Off'
      }
    },
    
    access_token: {
      label: 'Access Token',
      single: {
        value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0"
      },
      bearer: {
        value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",
        bound: false
      },
      multiple: [
        {         
          label: "token1",
          value: "OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0"
        },
        { 
          label: "token2",
          value: "UFGLO2FDAFG7VGZZPJ3IZEMN21EVU71FHCARP4J1"
        }
      ],
      options: {
        single: 'Single',
        bearer: 'Bearer',
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
      interact: ['start', 'finish'],
      start: ['redirect'],
      access_token: 'off',
      capabilities: 'off',
      subject: 'off'
    }
  }
  
  all = {
    full: {
      continue: 'on',
      interact: ['start', 'finish'],
      start: ['redirect', 'user_code', 'app'],
      access_token: 'on',
      subject: 'on'
    },
    minimal: {
      continue: 'off',
      interact: [],
      start: [],
      access_token: 'single',
      subject: 'off'
    }
  }

  
  change = (field) => (value) => {

    // if we're toggling everything at once
    if (field === 'all') {
      const all = this.all[value];
      this.setState({
        selected: all
      });
      return;
    }
	
    const s = this.state.selected;
	
    if (this.codeValues[field] 
        && (this.codeValues[field].type === 'checkbox' || this.codeValues[field].type === 'picklist')
        && value.indexOf('omit') !== -1) {
        // turn off everything
        s[field] = [];
    } else {
      s[field] = value;
    }
    //
    // if (field === 'handle' && value === 'off') {
    //   s.access_token = 'single';
    //   s.interaction = 'off';
    // }
    //
    // if (field === 'interaction' && value !== 'off') {
    //   s.handle = 'on';
    // }

    this.setState({
      selected: s
    });
    
  }
  
  render = () => {

    // build the transaction object based on the current selection
    const transaction = processCodeVal(this.codeValues, this.state.selected);
        
    const response = {...transaction};
    
    // build the selectors
    const options = {
      full: "Full",
      minimal: "Minimal"
    };
    const selectors = CodeValueSelector({
      change: this.change,
      codeValues: this.codeValues,
      selected: this.state.selected,
      options: options
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
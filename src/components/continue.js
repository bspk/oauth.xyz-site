import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

import { processCodeVal, CodeValueSelector } from '../components/codevalueselector'

class ContinueRequest extends React.Component {

  codeValues = {
    
    interact_ref: {
      label: 'Interaction Reference',
      on: '4IFWWIKYBC2PQ6U56NL1'      
    },
    
    access_token: {
      label: 'Access Token',
      single: {
        access: [{
          type: "example.com/resource-set",
          actions: ["read", "write", "dolphin"],
          locations: ["https://server.example.net/", "https://resource.local/other"],
          datatypes: ["metadata", "images"]
        }]
      },
      reference: {
        access: ["dolphin-metadata", "and another thing"]
      },
      bearer: {
        flags: ["bearer"],
        access: ["dolphin-metadata", "and another thing"]
      },
      both: {
        access: [
          "foo", "bar",
          {
            type: "example.com/resource-set",
            actions: ["read", "write", "dolphin"],
            locations: ["https://server.example.net/", "https://resource.local/other"],
            datatypes: ["metadata", "images"]
          },
          "dolphin-metadata"        
        ]
      },
      multiple: [
        {
          label: "token1",
          access: [{
            type: "example.com/resource-set",
            actions: ["read", "write", "dolphin"],
            locations: ["https://server.example.net/", "https://resource.local/other"],
            datatypes: ["metadata", "images"]
          }]
        },
        {
          label: "token2",
          access: [{
            type: "example.com/another-api",
            actions: ["foo", "bar", "dolphin"],
            locations: ["https://resource.other/"],
            datatypes: ["data", "pictures"]
          }]
        }
      ],
      options: {
        single: "Single",
        reference: "Reference",
        both: "Combined",
        bearer: "Bearer",
        multiple: "Multiple",
        omit: "Off"
      }
    },
	
  	subject: {
  		label: 'Subject',
  		full: {
  			"sub-ids": [ "iss-sub", "email", "phone" ],
  			"assertions": [ "oidc_id_token", "verfiable-credential" ]
  		},
  		minimal: {
  			"sub-ids": [ "email" ],
  		},
      options: {
        full: "Full",
		    minimal: "Minimal",
        omit: "Off"
      }
  	},
    
    interact: {
      label: 'Interact',
      type: 'checkbox',
      subkeys: ['start', 'finish'],
      start: {
        start: {
          label: "Start",
          type: 'picklist',
          redirect: "redirect",
          app: "app",
          user_code: "user_code",
          options: {
            redirect: "Redirect",
            app: "Launch App",
            user_code: "User Code"
          }
        }
      },
      finish: {
        finish: {
          label: "Finish",
          redirect: {
            method: "redirect",
            uri: "https://client.example.net/return/123455",
            nonce: "LKLTI25DK82FX4T4QFZC"
          },
          push: {
            method: "push",
            uri: "https://client.example.net/return/123455",
            nonce: "LKLTI25DK82FX4T4QFZC"
          },
          options: {
            redirect: "Redirect",
            push: "Push"
          }
        }
      },
      hints: {
        "ui_locales": ["en-US", "fr-CA"]
      },
      options: {
        start: "Start",
        finish: "Finish",
        hints: "Hints",
        omit: "Off"
      }
      
    },
    
    user: {
      label: 'User',
      full: {
        "sub-ids": [ {
          "subject_type": "email",
          "email": "user@example.com"
        } ],
        "assertions": {
          "oidc-id-token": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ"
        }
      },
      handle: "XUT2MFM1XBIKJKSDU8QM",
      options: {
        full: "Full",
        handle: "Handle",
        omit: "Off"
      }
    },
    
  }
  
  state = {
    selected: {
      interact_ref: 'on',
      access_token: 'off',
      interact: [],
      start: [],
      finish: [],
      user: 'omit',
      subject: 'omit'
    }
  }
  
  all = {
    omit: {
      interact_ref: 'off',
      access_token: 'omit',
      interact: [],
      start: [],
      finish: [],
      user: 'omit',
      subject: 'omit'
    },
    full: {
      interact_ref: 'on',
      access_token: 'multiple',
      interact: ['start', 'finish'],
      start: ['app', 'user_code', 'redirect'],
      finish: ['redirect'],
      user: 'full',
      subject: 'full'
    },
    interact: {
      interact_ref: 'on',
      access_token: 'off',
      interact: [],
      start: [],
      finish: [],
      user: 'omit',
      subject: 'omit'
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
    
    this.setState({
      selected: s
    });
    
  }
  
  render = () => {

    // build the transaction object based on the current selection
    const transaction = processCodeVal(this.codeValues, this.state.selected);

    // build the selectors
    const options = {
      interact: "Interact Reference",
      full: "Full Update",
      omit: "Off"
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
            from="client" to="as"
            code={transaction} 
          />
      </div>
    );
  
  }

};

export default ContinueRequest;
import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

class TransactionRequest extends React.Component {

  codeValues = {
    client: {
      label: 'Client',
      full: {
          name: "My Client Display Name",
          uri: "https://example.net/client"
      },
      handle: "VBUEOIQA82PBY2ZDJW7Q"
    },
    
    interact: {
      label: 'Interact',
      full: {
        type: "redirect",
        callback: "https://client.example.net/return/123455",
        state: "LKLTI25DK82FX4T4QFZC"
      },
      handle: "JMMLJ6393FI7ST9B1SRS"
    },
    
    user: {
      label: 'User',
      full: {
          assertion: "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ",
          type: "oidc_id_token"
      },
      handle: "XUT2MFM1XBIKJKSDU8QM"
    },
    
    resources: {
      label: 'Resources',
      full: [{
          actions: ["read", "write", "dolphin"],
          locations: ["https://server.example.net/", "https://resource.local/other"],
          data: ["metadata"]
      }],
      handle: ["dolphin-metadata"],
      both: [
        {
                  actions: ["read", "write", "dolphin"],
                  locations: ["https://server.example.net/", "https://resource.local/other"],
                  data: ["metadata"]
        },
        "dolphin-metadata"        
      ]
    },
    
    key: {
      label: 'Key',
      full: {
        jwks: {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "kid": "xyz-1",
      "alg": "RS256",
      "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"
    }
  ]
}
      },
      handle: "7C7C4AZ9KHRS6X63AJAO"
    }
  }
  
  state = {
    selected: {
      client: 'full',
      resources: 'handle',
      interact: 'full',
      key: 'full',
      user: 'omit'
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
    s[field] = value;
    
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
    
    // build the selectors
    const options = {
      full: "Full",
      handle: "Handle",
      omit: "Off"
    };
    
    const selectors = Object.keys(this.codeValues).map((field) => {
      if (field == 'resources') {
        
        const moreOptions = {
          full: "Full",
          handle: "Handle",
          both: "Both",
          omit: "Off"
        };
        
        return (
          <Selector onChange={this.change(field)} label={this.codeValues[field].label} selected={this.state.selected[field]} options={moreOptions} />
        );
      } else {
        return (
          <Selector onChange={this.change(field)} label={this.codeValues[field].label} selected={this.state.selected[field]} options={options} />
        );
      }
    })
    // add the "all" selector
    .concat(<Selector onChange={this.change('all')} label="All" all options={options} />);

    return (
      <div>
          <SelectorList>
            {selectors}
          </SelectorList>
          <Code code={transaction} />
      </div>
    );
  
  }

};

export default TransactionRequest;
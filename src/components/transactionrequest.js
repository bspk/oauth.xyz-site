import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

class TransactionRequest extends React.Component {

  codeValues = {
    client: {
      full: {
          name: "My Client Display Name",
          uri: "https://example.net/client"
      },
      handle: {
        handle: "VBUEOIQA82PBY2ZDJW7Q"
      }
    },
    
    interact: {
      full: {
        type: "redirect",
        callback: "https://client.example.net/return/123455",
        state: "LKLTI25DK82FX4T4QFZC"
      },
      handle: {
        handle: "JMMLJ6393FI7ST9B1SRS"
      }
    },
    
    user: {
      full: {
          assertion: "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ",
          type: "oidc_id_token"
      },
      handle: {
        handle: "XUT2MFM1XBIKJKSDU8QM"
      }
    },
    
    resources: {
      full: [{
          actions: ["read", "write", "dolphin"],
          locations: ["https://server.example.net/", "https://resource.local/other"],
          data: ["metadata"]
      }],
      handle: [{
        handle: "dolphin-metadata"
      }]
    },
    
    key: {
      full: {
          type: "jwsd",
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
      handle: {
        handle: "7C7C4AZ9KHRS6X63AJAO"
      }
    }
  }
  
  state = {
      transaction: {
        client: this.codeValues.client.full,
        resources: this.codeValues.resources.handle,
        interact: this.codeValues.interact.omit,
        key: this.codeValues.key.omit,
        user: this.codeValues.user.full
      },
      selected: {
        client: 'full',
        user: 'omit',
        resources: 'handle',
        interact: 'full',
        key: 'omit'
      }
  }

  
  change = (field) => (value) => {

    // if we're toggling everything at once
    if (field === 'all') {
      this.change('client')(value);
      this.change('interact')(value);
      this.change('resources')(value);
      this.change('user')(value);
      this.change('key')(value);
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
            <Selector onChange={this.change('resources')} label="Resources" selected={this.state.selected.resources} />
            <Selector onChange={this.change('interact')} label="Interact" selected={this.state.selected.interact}  />
            <Selector onChange={this.change('key')} label="Key" selected={this.state.selected.key} />
            <Selector onChange={this.change('user')} label="User" selected={this.state.selected.user} />
            <Selector onChange={this.change('all')} label="All" all />
          </SelectorList>
          <Code code={this.state.transaction} />
      </div>
    );
  
  }

};

export default TransactionRequest;
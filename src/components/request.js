import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

import { processCodeVal, CodeValueSelector } from '../components/codevalueselector'

class Request extends React.Component {

  codeValues = {
    
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
    
    client: {
      label: 'Client',
      instance: 'xyz-client-1234a',
      subkeys: ['full'],
      full: {
        key: {
          label: 'Key',
          jwsd: {
            proof: "jwsd",
            jwk: {
                  "kty": "RSA",
                  "e": "AQAB",
                  "kid": "xyz-1",
                  "alg": "RS256",
                  "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"
            }
          },
          httpsig: {
            proof: "httpsig",
            jwk: {
                  "kty": "RSA",
                  "e": "AQAB",
                  "kid": "xyz-1",
                  "alg": "RS256",
                  "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"
            }
          },
          mtls: {
            proof: "mtls",
            cert: "MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVzcG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkGA1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlvMRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcNMTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhvc3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxzY2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAKBgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHbs/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokqsd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHwwUjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytkvj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQcjfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLWaD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBsBgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxzY2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxzY2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtlTF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboXhufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3klwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh"
          },
          thumbprint: {
            proof: "mtls",
            "cert#S256": "bwcK0esc3ACC3DB2Y5_lESsXE8o9ltc05O89jdN-dg2"
          },
          ref: "7C7C4A-Z9KHRS-6X63AJAO",
          options: {
            jwsd: "JWS (Detached)",
            httpsig: "HTTP Signature",
            mtls: "MTLS",
            thumbprint: "MTLS (Thumbprint)",
            ref: "Reference"
          }
        },
        display: {
          label: 'Display',
          full: {
            name: "My Client Display Name",
            uri: "https://example.net/client"
          },
          options: {
            full: "Full",
            omit: "Off"
          }
        }
      },
      options: {
        full: 'Full',
        instance: 'Instance Identifier'
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
      identifier: {
        "sub_ids": [ {
          "subject_type": "email",
          "email": "user@example.com"
        } ]
      },
      full: {
        "sub_ids": [ {
          "subject_type": "email",
          "email": "user@example.com"
        } ],
        "assertions": {
          "oidc-id-token": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ"
        }
      },
      handle: "XUT2MFM1XBIKJKSDU8QM",
      options: {
        identifier: "Identifier",
        full: "Full",
        handle: "Handle",
        omit: "Off"
      }
    },
    
  }
  
  state = {
    selected: {
      display: 'full',
      access_token: 'single',
      interact: ['finish'],
      start: ['redirect'],
      finish: ['redirect'],
      key: 'httpsig',
      client: 'full',
      user: 'omit',
      subject: 'omit'
    }
  }
  
  all = {
    omit: {
      display: 'omit',
      access_token: 'omit',
      interact: [],
      start: [],
      finish: ['redirect'],
      key: 'omit',
      client: 'instance',
      user: 'omit',
      subject: 'omit'
    },
    full: {
      display: 'full',
      access_token: 'multiple',
      interact: ['start', 'finish'],
      start: ['app', 'user_code', 'redirect'],
      finish: ['redirect'],
      key: 'httpsig',
      client: 'full',
      user: 'full',
      subject: 'full'
    },
    minimal: {
      display: 'omit',
      access_token: 'reference',
      interact: [],
      start: [],
      finish: ['redirect'],
      key: 'ref',
      client: 'instance',
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
      full: "Full",
      minimal: "Minimal",
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

export default Request;
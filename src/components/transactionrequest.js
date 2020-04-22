import React from 'react'

import Code from '../components/code'
import Selector from '../components/selector'
import SelectorList from '../components/selectorlist'

class TransactionRequest extends React.Component {

  codeValues = {
    
    resources: {
      label: 'Resources',
      single: [{
          actions: ["read", "write", "dolphin"],
          locations: ["https://server.example.net/", "https://resource.local/other"],
          datatypes: ["metadata", "images"]
      }],
      handle: ["dolphin-metadata"],
      both: [
        {
                  actions: ["read", "write", "dolphin"],
                  locations: ["https://server.example.net/", "https://resource.local/other"],
                  datatypes: ["metadata", "images"]
        },
        "dolphin-metadata"        
      ],
      multiple: {
          token1: [{
            actions: ["read", "write", "dolphin"],
            locations: ["https://server.example.net/", "https://resource.local/other"],
            datatypes: ["metadata", "images"]
          }],
          token2: [{
            actions: ["foo", "bar", "dolphin"],
            locations: ["https://resource.other/"],
            datatypes: ["data", "pictures"]
          }]
      },
      options: {
        single: "Single",
        handle: "Handle",
        both: "Combined",
        multiple: "Multiple",
        omit: "Off"
      }
    },
	
	claims: {
		label: 'Claims',
		full: {
			subject: true,
			email: true,
			phone: true,
			auth_time: true
		},
		minimal: {
			subject: true
		},
		handle: 'DWH8WNFDA7QLE691KDY5',
        options: {
          full: "Full",
  		  minimal: "Minimal",
          handle: "Handle",
          omit: "Off"
        }
	},
    
    keys: {
      label: 'Keys',
      jwsd: {
        proof: "jwsd",
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
      httpsig: {
        proof: "httpsig",
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
      mtls: {
        proof: "mtls",
        cert: "MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVzcG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkGA1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlvMRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcNMTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhvc3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxzY2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAKBgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHbs/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokqsd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHwwUjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytkvj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQcjfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLWaD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBsBgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxzY2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxzY2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtlTF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboXhufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3klwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh"
      },
      thumbprint: {
        proof: "mtls",
        "cert#S256": "bwcK0esc3ACC3DB2Y5_lESsXE8o9ltc05O89jdN-dg2"
      },
      did: {
        proof: "httpsig",
        did: "did:example:CV3BVVXK2PWWLCRQLRFU#xyz-1"
      },
      handle: "7C7C4AZ9KHRS6X63AJAO",
      options: {
        jwsd: "JWS",
        httpsig: "HTTP Signature",
        mtls: "MTLS",
        thumbprint: "MTLS (Thumbprint)",
        did: "DID",
        handle: "Handle",
        omit: "Off"
      }
    },

    interact: {
      label: 'Interact',
      redirect: {
        redirect: true,
        callback: {
          uri: "https://client.example.net/return/123455",
          nonce: "LKLTI25DK82FX4T4QFZC"
        }
      },
      device: {
        user_code: true
      },
      qrcode: {
        redirect: true,
        user_code: true
      },
      didcomm: {
        didcomm: true
      },
      didcommQuery: {
        didcomm_query: true
      },
      all: {
        redirect: true,
        callback: {
          uri: "https://client.example.net/return/123455",
          nonce: "LKLTI25DK82FX4T4QFZC"
        },
        user_code: true,
        didcomm: true,
        didcomm_query: true
      },
      options: {
        redirect: "Redirect",
        device: "Device",
        qrcode: "QR Code",
        didcomm: "DIDComm",
        didcommQuery: "DIDComm Query",
        all: "All",
        omit: "Off"
      }
    },

    display: {
      label: 'Display',
      full: {
        name: "My Client Display Name",
        uri: "https://example.net/client"
      },
      handle: "VBUEOIQA82PBY2ZDJW7Q",
      options: {
        full: "Full",
        handle: "Handle",
        omit: "Off"
      }
    },
    
    user: {
      label: 'User',
      full: {
          assertion: "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ",
          type: "oidc_id_token"
      },
      handle: "XUT2MFM1XBIKJKSDU8QM",
      options: {
        full: "Full",
        handle: "Handle",
        omit: "Off"
      }
    },
    
    capabilities: {
      label: 'Capabilities',
      full: [
        'foo', 'bar', 'extension-B'
      ],
      options: {
        full: "On",
        omit: "Off"
      }
    }
    
  }
  
  state = {
    selected: {
      display: 'full',
      resources: 'handle',
      interact: 'redirect',
      keys: 'jwsd',
      user: 'omit',
      capabilities: 'omit',
	  claims: 'omit'
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
        {
          return (
            <Selector onChange={this.change(field)} label={this.codeValues[field].label} selected={this.state.selected[field]} options={this.codeValues[field].options} />
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
          <Code   
            from="client" to="as"
            code={transaction} 
          />
      </div>
    );
  
  }

};

export default TransactionRequest;
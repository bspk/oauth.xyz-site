import { Link, graphql } from 'gatsby'
import { Location } from '@reach/router';
import PropTypes from 'prop-types'
import React from 'react'

const menuLinks = [
      {
        name: 'Request',
        link: '/transactionrequest/'
      },
      {
        name: 'Response',
        link: '/transactionresponse/'
      },
      {
        name: 'Interaction',
        link: '/interaction/'
      },
      {
        name: 'Keys',
        link: '/keys/'
      },
      {
        name: 'Tokens',
        link: '/tokens/'
      },
      {
        name: 'Discovery',
        link: '/discovery/'
      },
      {
        name: 'Other Specs',
        link: '/specs/'
      },
      {
        name: 'About',
        link: '/about/'
      },
]

const Header = ({ location }) => (
  <div className="header">
    <div className="wrapper">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src="/xyz.png" alt="XYZ" className="logo" />
          XYZ: Implementing GNAP
        </Link>
      </h1>
          <nav>
            {
              menuLinks.map(link =>
                  <Link to={link.link}><span>&raquo;</span> {link.name}</Link>
              )
            }
          </nav>
    </div>
    <div class="subnav">
            
    </div>
  </div>
)

export default Header

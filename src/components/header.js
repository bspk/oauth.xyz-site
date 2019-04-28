import { Link } from 'gatsby'
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
        name: 'Examples',
        link: '/examples/'
      },
      {
        name: 'About',
        link: '/about/'
      },
]


const Header = ({ siteTitle, currentPage }) => (
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
          {siteTitle}
        </Link>
      </h1>
          <nav>
          {
              menuLinks.map(link =>
                  <Link to={link.link}>{link.name}</Link>
              )
            }
          </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

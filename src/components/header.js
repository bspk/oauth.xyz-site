import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const menuLinks = [
      {
        name: 'Request',
        link: '/transactionrequest/'
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
        name: 'Specification',
        link: '/specification/'
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
          <nav style={{ display: 'flex', flex: 1 }}>
            {
              menuLinks.map(link =>
                <li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li> )
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

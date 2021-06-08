import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const BaseTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

BaseTemplate.propTypes = {
  children: PropTypes.any.isRequired
}

export default BaseTemplate

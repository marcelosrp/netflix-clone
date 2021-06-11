import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

GlobalStorage.propTypes = {
  children: PropTypes.any.isRequired
}

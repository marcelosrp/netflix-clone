import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  function handleSelectProfile(id, name, avatar) {
    console.log(`Nome: ${name} - Avatar: ${avatar}`)
  }

  return (
    <GlobalContext.Provider value={{ handleSelectProfile }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalStorage.propTypes = {
  children: PropTypes.any.isRequired
}

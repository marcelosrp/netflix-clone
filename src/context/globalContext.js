import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [profileClicked, setProfileClicked] = useState(false)

  function handleProfileClick(name, avatar) {
    const ProfileInfo = {
      name,
      avatar
    }

    localStorage.setItem('profile', JSON.stringify(ProfileInfo))
    setProfileClicked(!profileClicked)
  }

  return (
    <GlobalContext.Provider value={{ profileClicked, handleProfileClick }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalStorage.propTypes = {
  children: PropTypes.any.isRequired
}

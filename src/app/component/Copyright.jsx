import React from 'react'

const Copyright = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div>
        <p>&copy; Oladele AKomolede {currentYear}</p>
    </div>
  )
}

export default Copyright
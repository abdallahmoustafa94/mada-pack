import React from 'react'

const MainInfo = ({ title, desc, rtl }) => {
  return (
    <>
      <h5 className="title">{ title}</h5>

     
      <div className="info-text">
        { desc }
      </div>

    </>
  )
}

export default MainInfo
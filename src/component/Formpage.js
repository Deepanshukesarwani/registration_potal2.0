import React from 'react'
import logo from './asset/logo.png'
const Formpage = () => {
  return (
    <div>
      {/* <h1>Form page</h1> */}
      <div className="form_wrapper">
          <div id="formheader">
            <div className="formlogo">
                <img src={logo} alt="" />
            </div>
            <div className="formRverblogo">
                

            </div>
          </div>
          <div id="form_content"></div>
      </div>
    </div>
  )
}

export default Formpage

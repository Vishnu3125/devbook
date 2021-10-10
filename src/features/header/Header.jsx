import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

function Header() {

    return (
        <div className="header-div">
            {/* <div className="header-colour-div-button" style={{right:"80px", background:"-webkit-linear-gradient(#F09819 1%, #FF512F  100%)"}}> </div>
            <div className="header-colour-div-button" style={{right:"60px", background:"-webkit-linear-gradient(#02AAB0 1%, #04e4be  100%)"}} onClick={selectBlue}> </div>
            <div className="header-colour-div-button" style={{right:"40px", background:"-webkit-linear-gradient(#DA22FF 0%, #9733EE  100%)"}}> </div>
            <div className="header-colour-div-button" style={{right:"20px", background:"-webkit-linear-gradient(#FDFC47 0%, #24FE41  100%)"}}> </div> */}
            <p className="header-title">DevBook</p>
        </div>
    )
}

export default Header

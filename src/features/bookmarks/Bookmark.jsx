import React from 'react'
import Box from './Box';
import * as data from './Data';
// /Modal.setAppElement('#bookmark-main-div');


function Bookmark() {
    
    return (
        <div className="bookmark-main-div" id="bookmark-main-div">
            {/* <div className="bookmark-title-div">
                <p className="bookmark-title">BOOKMARKS</p>
            </div> */}
            <div className="bookmark-content-div">
            <Box subject={data.uiGraphics}></Box>
            <Box subject={data.fonts}></Box>
            <Box subject={data.colour}></Box>
            <Box subject={data.icons}></Box>
            <Box subject={data.logo}></Box>
            <Box subject={data.stockPhoto}></Box>
            <Box subject={data.stockVideo}></Box>
            <Box subject={data.vectors}></Box>
    
            </div>
        </div>
    )
}

export default Bookmark

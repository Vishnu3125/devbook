import React from 'react'

function Searchbar() {

    function search(){
        var value = document.getElementById("search-site").options[document.getElementById("search-site").selectedIndex].value;
        var searchQuery =  document.getElementById("main_search").value;

        console.log(value)

        if(value == "Google"){
            window.open("https://www.google.com/search?q="+searchQuery,"_self")
        }
        else if(value == "Dribbble"){
            window.open("https://www.dribbble.com/search/"+searchQuery,"_self")
        }
        else if(value == "Github"){
            window.open("https://github.com/search?q="+searchQuery,"_self")
        }
        // else if(value == "Dribbble"){
        //     window.open("https://www.google.com/search?q="+searchQuery,"_self")
        // }

    }

    return (
        <div className="search-bar-main-div">
            <img className="search-bar-icon" src="https://img.icons8.com/ios-filled/50/f0f0f0/search--v1.png"/>
            <div className="search-bar-div">
            <input type="search" name="main_search" id="main_search" className="search-bar"/>
                <select id="search-site">  
                    <option value = "Google"> Google </option>  
                    <option value = "Dribbble"> Dribbble </option>  
                    <option value = "Github"> Github </option>  
                    {/* <option value = "Skoda"> Skoda </option>   */}
                </select>
            <br />
            <input type="submit" value="Let's Go" className="search-bar-button" onClick={search}/>
            </div>
        </div>
    )
}

export default Searchbar

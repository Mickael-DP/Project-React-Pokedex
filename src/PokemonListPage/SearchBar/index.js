import './style.css'

function SearchBar() {
    return (
     <div className="searchbar">
         <input
             type="text"
             id="header-search"
             placeholder="Enter pokemon name"
             name="s"
         />
     </div>


    )
}

export default SearchBar

import './style.css'

function SearchBar({name, onChange}) {
    return (
     <div className="searchbar">
         <input
             type="text"
             className="header-search"
             placeholder="Enter pokemon name"
             value={name}
             onChange={onChange}
         />
     </div>
    )
}

export default SearchBar

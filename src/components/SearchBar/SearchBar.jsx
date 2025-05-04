import "./searchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function SearchBar() {
  return (
    <div className='searchbar'>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  )
}

export default SearchBar
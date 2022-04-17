import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return(
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
            <div className="header_search">
                <select name="options" className="header_selectOption">
                    <option value="All">All</option>
                </select>
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" /> 
            </div>
      
        </nav>
    );
}



export default Header;
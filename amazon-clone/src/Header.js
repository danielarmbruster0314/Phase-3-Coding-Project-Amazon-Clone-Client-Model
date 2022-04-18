import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Header(){
    return(
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
            
            <div className="header_address">
            <FmdGoodOutlinedIcon  className="header_adressIcon"/>
            <img className="test" src="" alt="why"/>
            <div className="header_optionLeft">
            <span className="header_optionLineOneLeft">Hello</span>
            <span className="header_optionLineTwoLeft">Select your address</span>
            </div>
            </div>
            <div className="header_search">
                <select name="options" className="header_selectOption">
                    <option value="All">All</option>
                </select>
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" /> 
            </div>
        <div className="header_nav">
            <Link to="/login" className="header_link">
            <div className="header_option">
            <span className="header_optionLineOne">Hello, Sign in</span>
            <span className="header_optionLineTwo">Account & Lists</span>
            </div>
            </Link>

            <Link to="/" className="header_link">
            <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo"> & Orders</span>
            </div>
            </Link>

            <Link to="/" className="header_link">
            <div className="header_option">
            <span className="nav-sprite "></span>
            <span className="header_optionLineTwo">Cart</span>
            </div>
            </Link>
        </div>
        </nav>
    );
}



export default Header;
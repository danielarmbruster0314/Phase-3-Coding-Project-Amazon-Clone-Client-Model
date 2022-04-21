import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from "./StateProvider";
import { MenuOutlined} from "@ant-design/icons";


const categories = ["Books", "Electronics", "Kitchen" , "Sports"];
function Header({cart}){
    const [{ basket }] = useStateValue();
    return(
        <>
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
            
            <div className="header_address">
            <img className="header_locationIcon" src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos1.png?raw=true" alt="why"/>
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

            <Link to="/checkout" className="header_link">
            <div className="header_optionCart"> 
            <span className="header_cart_quantity">{cart?.length}</span>
            <img className="test2" src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos2.png?raw=true" alt="why"/>
            <span className="nav-sprite "></span>
            <span className="header_optionLineTwo">Cart</span>
            </div>
            </Link>
        </div>
        </nav>


        <div className="header_subheader">
            <MenuOutlined />
           <span>Categories</span> 
          {categories.map((e) =>{
            return(
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            )
  
          })}
        
        
      </div>
      </>
    );
}



export default Header;
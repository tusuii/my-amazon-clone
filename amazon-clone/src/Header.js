import React from "react"; //rfce react component
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBagRounded";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">signIn</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="option_basket">
          <ShoppingBasket/>
          <span className="header_optionlineTwo header_basketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

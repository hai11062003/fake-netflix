import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKR_T2MHeA4z0sdtEc4j0W7qODkHfin9sysREL-4p47w&s"
            alt=""
            width={40}
          />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/"> Movies</Link>
          </li>
          <li>
            <Link to="/movie-management"> Movie Management</Link>
          </li>
          <li onClick={() => setIsShowSearch(true)}>
            <SearchOutlined />
          </li>
          <li>
            <Link to={"/login"}>
              <UserOutlined />
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`header__search  ${isShowSearch ? "active" : ""}`}>
        <input type="text" placeholder="Search a japanese movie" />
        <CloseOutlined onClick={() => setIsShowSearch(false)} />
      </div>
    </header>
  );
}

export default Header;

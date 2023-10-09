import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

function Support() {
  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Поддержка</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
    </div>
  );
}

export default Support;

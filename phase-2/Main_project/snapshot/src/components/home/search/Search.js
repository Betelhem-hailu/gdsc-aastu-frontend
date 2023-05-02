import React from "react";
import "./search.css";
import Title from "../../title/Title";
import HandleFunc from "../../HandleFunc";

const Search = ({logIn}) => {
  return (
    <div className="snapshot__search page__form">
      <div className="snapshot__search-title">
      <Title title={"Snapshot"}/>
        <button type='button' className="snapshot-button" onClick={logIn}>Login</button>
      </div>
      <div className="snapshot__search-searchbar">
        <input type="text" placeholder="Start typing..." className="input-text" />
        <button type="button" className="snapshot-button">Search</button>
      </div>
    </div>
  );
};

export default Search;

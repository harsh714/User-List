import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={classes.searchContainer}>
      <div className={classes["input-container"]}>
        <input
          type="text"
          placeholder="Search by name"
          value={props.searchTerm}
          onChange={props.searchTermHandler}
        />
      </div>
      <div className={classes.searchBtn}>
        <button onClick={props.handleSearch} className={classes.button}>
          Search
        </button>
      </div>
      <div className={classes.sortBtn}>
        <button onClick={props.handleSortByName} className={classes.button}>
          Sort by Name
        </button>
      </div>
    </div>
  );
}

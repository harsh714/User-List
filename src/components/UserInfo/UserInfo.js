import React, { useState, useEffect } from "react";
import classes from "./UserInfo.module.css";
import InfoTable from "../InfoTable/InfoTable";
import Input from "../Input/Input";

export default function UserInfoTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pastSearches, setPastSearches] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  // Load past searches from localStorage on initial load
  useEffect(() => {
    const storedPastSearches = localStorage.getItem("pastSearches");
    if (storedPastSearches) {
      setPastSearches(JSON.parse(storedPastSearches));
    }
  }, []);

  // Save past searches to localStorage when they change
  useEffect(() => {
    localStorage.setItem("pastSearches", JSON.stringify(pastSearches));
  }, [pastSearches]);

  const handleSearch = () => {
    // console.log("Button is clicked");

    if (searchTerm.trim() === "") {
      return;
    }

    const newPastSearches = [...pastSearches, searchTerm];
    setPastSearches(newPastSearches);

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPastSearches(filteredUsers);
    setIsSearched(true);
  };

  const handleSortByName = () => {
    const sorted = [...users];
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sorted);
    setSortedUsers(sorted);
    setIsSorted(true);
  };

  const searchTermHandler = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1>Users List</h1>
      <Input
        searchTerm={searchTerm}
        searchTermHandler={searchTermHandler}
        handleSearch={handleSearch}
        handleSortByName = {handleSortByName}
      />

      <InfoTable
        users={users}
        isSorted={isSorted}
        isSearched={isSearched}
        searchItems={pastSearches}
        sortedItems={sortedUsers}
      />
    </>
  );
}

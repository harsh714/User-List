import React from "react";
import classes from "./InfoTable.module.css";

export default function InfoTable(props) {
  return (
    <>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th colSpan={7}>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th colSpan={3}>Company</th>
          </tr>
        </thead>
        <tbody>
          {props.isSearched
            ? props.isSorted
              ? props.sortedItems.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td colSpan={7}>
                      {user.address.street}, {user.address.suite},
                      {user.address.city}, {user.address.zipcode},{" "}
                      {user.address.geo.lat}, {user.address.geo.lon}
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td colSpan={3}>
                      {user.company.name}, {user.company.catchPhrase},{" "}
                      {user.company.bs}
                    </td>
                  </tr>
                ))
              : props.searchItems.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td colSpan={7}>
                      {user.address.street}, {user.address.suite},
                      {user.address.city}, {user.address.zipcode},{" "}
                      {user.address.geo.lat}, {user.address.geo.lon}
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td colSpan={3}>
                      {user.company.name}, {user.company.catchPhrase},{" "}
                      {user.company.bs}
                    </td>
                  </tr>
                ))
            : props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td colSpan={7}>
                    {user.address.street}, {user.address.suite},
                    {user.address.city}, {user.address.zipcode},{" "}
                    {user.address.geo.lat}, {user.address.geo.lon}
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td colSpan={3}>
                    {user.company.name}, {user.company.catchPhrase},{" "}
                    {user.company.bs}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}

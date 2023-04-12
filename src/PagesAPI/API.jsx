import React, { useState, useEffect } from "react";
import axios from "axios";

function Apipages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Apipages;
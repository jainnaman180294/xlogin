import React, { useState } from "react";

function Xlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage(`Welcome, ${username}!`);
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <div>
          <p>{error}</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                placeholder="username"
                onChange={handleUsername}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                placeholder="password"
                onChange={handlePassword}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Xlogin;

import React, { useState } from "react";
import "./App.css";

function Change() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() !== "") {
      alert(`Entered Email: ${email}`);
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <div className="container">
      <h2>Email Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Email:</label>
        <input type="email" id="email" value={email}onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Change;

import React, { useState } from "react";
import "../asset/css/account.css";

const AccountPage = () => {
  const [address, setAddress] = useState("123 Main St, City, Country");

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address updated successfully!");
  };

  return (
    <div className="account-container">
      <h1>Account</h1>
      <form onSubmit={handleSubmit}>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={handleChangeAddress}
          className="address-input"
        />
        <button type="submit" className="update-button">
          Update Address
        </button>
      </form>
    </div>
  );
};

export default AccountPage;

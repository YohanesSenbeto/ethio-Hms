import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/employee/register", formData)
      .then((response) => {
        setMessage("Employee registered successfully");
      })
      .catch((error) => {
        setMessage(error.response.data.error || "Error registering employee");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Register An Employe</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        {["first_name", "last_name", "email", "password", "role"].map(
          (field) => (
            <div key={field} className="mb-3">
              <label className="form-label">
                {field.replace("_", " ").toUpperCase()}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          )
        )}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddEmployee;

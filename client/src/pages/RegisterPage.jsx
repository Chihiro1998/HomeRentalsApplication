import React, { useState } from "react";
import "../styles/Register.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      // Create a copy of the exist form data
      ...formData,
      [name]: value,
      // Update the corresponding value according to the name
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  console.log(formData);

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
          ></input>
          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          ></input>
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          ></input>
          <input
            id="image"
            name="profileImage"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo"></img>
            <p>Upload Your Photo</p>
          </label>

          {formData.profileImage && (
            // Create a URL for Selected file, this URL can be used to display the photo
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}

          <button type="submit">REGISTER</button>
        </form>
        <a href="./login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;

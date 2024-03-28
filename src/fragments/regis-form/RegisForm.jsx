import React, { useState } from "react";
import "./RegistrationForm.css"; // Ganti dengan nama file CSS yang sesuai
import { registerUser } from "./utils"; // Import fungsi untuk registrasi

function RegistrationForm() {
  const [delay, setDelay] = useState(false);
  const [registration, setRegistration] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationResult = await registerUser(registration, setDelay);
    console.log(registrationResult);
    // Tambahkan logika lainnya, seperti pengalihan halaman setelah registrasi berhasil
  };

  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          {delay ? "Waiting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

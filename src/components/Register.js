import React, { useEffect, useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);

      if (response.status === 200) {


        toast.success("Registration successful!");
        setFormData({ name: "", dob: "", email: "", password: "" });


        navigate("/login");
      } else {
        toast.error(` ${response.data.msg}`);
        setFormData({ name: "", dob: "", email: "", password: "" });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed. Please try again.");
      setFormData({ name: "", dob: "", email: "", password: "" });
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <div className="icon-container">
        <FaUserCircle size={100} color="#fff" />
      </div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
          <FaUserCircle className="input-icon" />
        </div>


        <div className="input-group">
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            max={new Date().toISOString().split("T")[0]}
            placeholder="Date of Birth"
          />
        </div>


        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <FaEnvelope className="input-icon" />
        </div>


        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
          <FaLock className="input-icon" />
        </div>

        <button type="submit">Register</button>
      </form>


      <p className="already-registered">
        Already registered? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;

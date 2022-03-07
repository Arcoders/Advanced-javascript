import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Auth from "../../services/Auth";
import "./index.css";

const Register = () => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  let history = useHistory();

  const { name, email, password } = datos;

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await Auth.register({ name, email, password });
    if (status === "success") {
      history.push("/login");
    }
    if (message)setError(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <span> Warning! &nbsp; {error}</span>
      )}
      <div>
        <div>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />

          <Link to="/login">Login</Link>
          <button>
            <span>Register</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;

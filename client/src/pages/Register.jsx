import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefalt();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link to={"/login"} className="underline text-base">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

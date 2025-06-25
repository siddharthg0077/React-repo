import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (state === "register") {
      try {
        const response = await axios.post('http://localhost:8001/api/signup', {
          name,
          email,
          password
        });
  
        if (response.status === 201) {
          alert("Registration successful! Please login.");
          setState("login");
          setName("");
          setEmail("");
          setPassword("");
        }
      } catch (err) {
        console.error(err);
        setError("Registration failed. Try again.");
      }
  
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8001/api/login',
          { email, password },
          { withCredentials: true }
        );
  
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/home');
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || "Login failed. Try again.");
      }
    }
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
        <p className="text-2xl font-medium m-auto">
          <span className="text-indigo-500">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="text"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="password"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {state === "register" ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">
              Click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{' '}
            <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">
              Click here
            </span>
          </p>
        )}

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
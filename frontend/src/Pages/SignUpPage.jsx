import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8001/api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Account created successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 border-4 border-pink-200">
        <h2 className="text-4xl font-extrabold text-pink-700 text-center mb-8">
           Create Your Account 
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Sign up to join the sweet journey! 🍰
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="mobile">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Re-enter your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold tracking-tight text-white bg-pink-600 rounded-lg shadow-lg group hover:bg-pink-700 transition duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-pink-500 blur-sm opacity-70 group-hover:scale-125 transition-transform duration-300"></span>
              <span className="relative">Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

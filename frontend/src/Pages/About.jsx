import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Image Section */}
        <div className="w-full h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-8 space-y-4">
          <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
          <p className="text-gray-700 text-lg">
            Welcome to our application! We're passionate about building clean,
            modern, and user-friendly solutions to make your life easier.
          </p>
          <p className="text-gray-600">
            Our team is made up of creative minds and problem-solvers, and we
            work hard to deliver high-quality experiences. We believe in
            innovation, collaboration, and putting users first.
          </p>
          <p className="text-blue-700 font-semibold">
            Thanks for visiting — let’s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

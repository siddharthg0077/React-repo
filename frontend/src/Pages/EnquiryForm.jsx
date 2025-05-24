import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">🎂 Enquiry Form 🎂</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enquiry subject"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
            />
          </div>
<div className="flex justify-center">
  <button
    className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
  >
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span className="absolute bottom-0 left-0 h-full -ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full opacity-100 object-stretch"
        viewBox="0 0 487 487"
      >
        <path
          fillOpacity=".1"
          fillRule="nonzero"
          fill="#FFF"
          d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
        ></path>
      </svg>
    </span>
    <span className="absolute top-0 right-0 w-12 h-full -mr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="object-cover w-full h-full"
        viewBox="0 0 487 487"
      >
        <path
          fillOpacity=".1"
          fillRule="nonzero"
          fill="#FFF"
          d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
        ></path>
      </svg>
    </span>
    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
    <span className="relative text-base font-semibold">Submit</span>
  </button>
</div>


        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;

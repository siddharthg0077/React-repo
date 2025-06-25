
import React, { use, useEffect, useState } from 'react';

const EnquiryForm = () => {
  const [enquiries, setEmquiries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId)
      try {
        {
          const res = await fetch(`http://localhost:8001/api/enquiries/${editingId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (res.ok) {
            alert('Enquiry updated successfully!');
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setEditingId(null);
            fetchEnquiries();
          } else {
            alert('Failed to update enquiry. Please try again later.');
          }
        }
      } catch (error) {
        console.error('Error updating enquiry:', error);
        alert('An error occurred. Please try again later.');
      }

    else {
      // Submit new enquiry

      try {
        const res = await fetch('http://localhost:8001/api/enquiries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert('Enquiry submitted successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          alert('Failed to submit enquiry. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting enquiry:', error);
        alert('An error occurred. Please try again later.');
      }

    }


  };

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('http://localhost:8001/api/enquiries');
      const data = await res.json();
      setEmquiries(data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const res = await fetch(`http://localhost:8001/api/enquiries/${id}`, {
          method: 'DELETE',
        });

      } catch (error) {
        console.error('Error deleting enquiry:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const startEditing = (enquiry) => {
    setEditingId(enquiry._id);
    setForm({      name: enquiry.name,
      email: enquiry.email,
      subject: enquiry.subject,
      message: enquiry.message,
    });
    window.scrollTo({ top: 0, behavior: 'smooth'} );
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 border-4 border-pink-200">
        <h2 className="text-4xl font-extrabold text-pink-700 text-center mb-8">
          ✨ Haven Cake Enquiry ✨
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Have a sweet question or want to place a custom cake order? Let us know! 😊
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="name">Name</label>
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
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="email">Email</label>
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
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="What’s the occasion? (e.g., Birthday Cake)"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-pink-800" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Tell us more about your cake idea..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold tracking-tight text-white bg-pink-600 rounded-lg shadow-lg group hover:bg-pink-700 transition duration-300"
            >
            {editingId ? 'Update Enquiry' : 'Send Enquiry'}
              <span className="absolute inset-0 w-full h-full bg-pink-500 blur-sm opacity-70 group-hover:scale-125 transition-transform duration-300"></span>
              <span className="relative">Send Enquiry</span>
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEditing}
                className="ml-4 px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        
      </div>
      <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Enquiry List</h2>
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Message</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiries.map((enquiry) => (
                            <tr key={enquiry._id}>
                                <td className="p-2 border">{enquiry.name}</td>
                                <td className="p-2 border">{enquiry.email}</td>
                                <td className="p-2 border">{enquiry.message}</td>
                                <td className="p-2 border">
                                    <button
                                        onClick={() => startEditing(enquiry)}
                                        className="p-2 bg-green-400 text-white-600 hover:underline mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(enquiry._id)}
                                        className="p-2 bg-red-400 text-white-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default EnquiryForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Fetched Data from Backend!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.username}</h2>
              <div className="text-gray-600 space-y-1">
                <p><span className="font-medium">Mobile:</span> {post.mobile}</p>
                <p><span className="font-medium">Name:</span> {post.name}</p>
                <p><span className="font-medium">Email:</span> {post.email}</p>
                <p><span className="font-medium">Password:</span> {post.password}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Posts;

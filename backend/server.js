// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const axios = require('axios');

// dotenv.config();

// const app = express();

// app.use(cors({
//   origin:'http://localhost:5173',
//   credentials:true,
// }));
// app.use(express.json());

// // Use your actual MongoDB URI here, including database name and options
// const MONGO_URI = process.env.MONGO_URI || 
//   'mongodb+srv://admin:1111@mernstack.prkyx7b.mongodb.net/mydbname?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI)
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err.message);
//     process.exit(1);
//   });

// // Enquiry Schema & Model
// const enquirySchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });

// const Enquiry = mongoose.model('Enquiry', enquirySchema);

// // User Schema & Model
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });



// const Signup = mongoose.model('Signup', new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// }));

// const User = mongoose.model('User', userSchema);

// // Routes

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Enquiry route
// app.post('/api/enquiries', async (req, res) => {
//   try {
//     console.log('Received enquiry:', req.body);
//     const enquiry = new Enquiry(req.body);
//     const saved = await enquiry.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error('Error saving enquiry:', err.message);
//     res.status(500).json({ error: 'Failed to save enquiry' });
//   }
// });

// // Registration route WITHOUT bcrypt
// app.post('/api/registration', async (req, res) => {
//   try {
//     console.log('Received registration data:', req.body);
//     const { name, email, mobile, username, password } = req.body;

//     // Check duplicate email or username
//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email or Username already exists' });
//     }

//     //signup
//     app.post('/api/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if email already exists
//     const existingUser = await Signup.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered.' });
//     }

//     const newUser = new Signup({ name, email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully!', user: newUser });
//   }catch(error)
//   {
//     res.status(500).json({message:'Signup Failed',error});
//   }
// });

// // app.post('/api/login',async(req,res)=>
// // {
// //   try{
// //     const{email,password}=req.body;

// //     const user=await userSchema.findOne({email,password});
// //     if(!user)
// //     {
// //       return res.status(401).json({message:'Invalid email or password'});
// //     }
// //     res.status(200).json({message:'Login Successful',user});

// //   }
// //   catch(error)
// //   {
// //     res.status(500).json({message:'Login Failed',error});
// //   }
// // });

// app.post('/api/login',async(req,res)=>
// {
//   try{
//     const{email,password}=req.body;

//     const user=await Signup.findOne({email,password});
//     if(!user)
//     {
//       return res.status(401).json({message:'Invalid email or password'});
//     }
//     res.status(200).json({message:'Login Successful',user});

//   }
//   catch(error)
//   {
//     res.status(500).json({message:'Login Failed',error});
//   }
// });

//     const user = new User({
//       name,
//       email,
//       mobile,
//       username,
//       password, // plain password stored (not recommended for prod)
//     });

//     const saved = await user.save();
//     res.status(201).json({ message: 'User registered successfully', userId: saved._id });
//   } catch (err) {
//     console.error('Error in Registration:', err.message);
//     res.status(500).json({ error: 'Failed to Register' });
//   }
// });

// // Proxy posts route example
// app.get('/posts', async (req, res) => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });





// server.js
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

//app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, // allow cookies
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Example Mongo model
const Enquiry = mongoose.model('Enquiry', new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}));

const Signup = mongoose.model('Signup', new mongoose.Schema({
  name: String,
  email: String,
  password: String,
}));

// POST: Save enquiry to MongoDB
app.post('/api/enquiries', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const saved = await enquiry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    const newUser = new Signup({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user.', error });
  }
});


app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Login successful!', user });
  } catch (error) {
    res.status(500).json({ message: 'Login failed.', error });
  }
});


app.get('/api/enquiries', async (req, res) => {
  try {
    const getenquiry = await Enquiry.find();
    res.status(200).json(getenquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Enquiry by ID
app.put('/api/enquiries/:id', async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating enquiry.', error });
  }
});

// Delete Enquiry by ID
app.delete('/api/enquiries/:id', async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Enquiry deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting enquiry.', error });
  }
});


// Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
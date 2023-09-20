import express from "express";
import cors from "cors";
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/users").then(() => {
    console.log('Connected to MongoDB');
  });
  const userSchema=new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    gender: String,
    hobbies: String,
    category: String,
    department: String,
    location: String,
    salary: String,
    password: String,
  })
const User=new mongoose.model("User",userSchema)
const managerSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })
const Manager=new mongoose.model("Manager",managerSchema)


app.get('/update/:userId', async (req, res) => {
  const { userId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  const updatedData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });

    if (user) {
      return res.status(200).json({ message: "User updated", user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating user", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
  
    if (password === user.password) {
      res.send({ message: "login successfully", user: user });
    } else {
      res.send({ message: "password didn't match" });
    }
  } else {
    res.send({ message: "user not registered" });
  }
});

app.post("/register",async(req,res)=>{
    const{fname,lname,gender,hobbies,email,password}=req.body
    let user = await User.findOne({ email: req.body.email });
    if(user){
      return res.send({message:"user already exist"})
    }else{
      const user=new User({
        fname,
        lname,
        gender,
        hobbies,
        email,
        password,

      })
      await user.save();
      res.send({message:"successfully registered, Please Login Now"})
    }   
});

app.post("/managerlogin", async (req, res) => {
  const { email, password } = req.body;
  let manager = await Manager.findOne({ email: req.body.email }); // Use Manager instead of manager
  if (manager) {
    if (password === manager.password) {
      res.send({ message: "login successfully", manager: manager });
    } else {
      res.send({ message: "password didn't match" });
    }
  } else {
    res.send({ message: "manager not registered" });
  }
});

app.post('/update/:userId', async (req, res) => {
  const { userId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  const updatedData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });

    if (user) {
      return res.status(200).json({ message: "User updated", user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating user", error: error.message });
  }
});


app.delete('/users/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    // Attempt to delete the user by ID
    const deletedUser = await User.findByIdAndRemove(userId);

    if (deletedUser) {
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error deleting user", error: error.message });
  }
});


app.post("/managerregister",async(req,res)=>{
    const{name,email,password}=req.body
    let manager = await Manager.findOne({ email: req.body.email });
    if(manager){
      return res.send({message:"user already exist"})
    }else{
      const manager=new Manager({
        name,
        email,
        password
      })
      await manager.save();
      res.send({message:"successfully registered, Please Login Now"})
    }   
});
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.status(200).json(users); 
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    if (password === user.password) {
      res.send({ message: "login successfully", user: user });
    } else {
      res.send({ message: "password didn't match" });
    }
  } else {
    res.send({ message: "user not registered" });
  }
});

app.listen(9002,()=>{
    console.log("started at port 9002")
})
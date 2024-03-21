import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    // console.log("signup user");
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error:"Username already exists"})
        }

        // Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await  bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword, 
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic, 
        });

        if (newUser){
            // Generate JwT here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({error: "Invalid usser data"})
        }
        
    }
    catch (err) {
        console.log("Error in signup controller", err.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const login = async (req, res) => {
    // console.log("login user");
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res);
        
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    }
    catch {
        console.log("Error in login controller", err.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const logout = async (req, res) => {
    // console.log("logout user");

    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out succesfully"});
    }
    catch {
        console.log("Error in login controller", err.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

import User from '../models/User.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';






//Login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) { 
        res.status(400);
        throw new Error("Invalid Credentials");
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
        res.status(400);
        throw new Error("Invalid Credentials");
    }

    if (!user.isAdmin) {
        res.status(403);
        throw new Error("Not Authroized");
    }


    generateToken(res, user._id);

    res.json({
        message: "Logged In",
        admin: {
            id: user._id,
            email: user.email,
        },
    });
};

//Logout
export const logoutAdmin = (req, res) => {
    res.clearCookie("jwt");
    res.json({message: "Logged Out"})
};


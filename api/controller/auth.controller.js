import bcrypt, { hash } from "bcrypt";
import prisma  from "../lib/prisma.js";
import jwt from "jsonwebtoken"

export const register = async (req,res) =>{
    const {username , email , password} = req.body;

    try{
        
        const hashedpassword = await bcrypt.hash(password , 10);
    
        // console.log(hashedpassword)
    
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password: hashedpassword ,
    
            },
        })
        console.log(newUser)
    
        res.status(201).json({message:"User Created Succesfully"});
       
    } catch (err) {
        console.log(err)
        res.status(500).json({message:"failed to create user"})
    }
    }

export const login = async (req,res) =>{
    const {username , password} = req.body;

    try{

        const user = await prisma.user.findUnique({
            where: {username},
        });

        if (!user) return res.status(401).json({message: "Invalid Credentials"});


        const isPasswordValid =  await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(401).json({message:"Invalid Credentials"});

        const age  = 1000 * 60 * 60 *24 * 7;

        const token = jwt.sign({
            id: user.id,
            isAdmin: false,

        },process.env.JWT_SECRET_KEY ,
        {
        expiresIn: age,
        })
        const {password: userPassword , ...userInfo} = user;

        res.cookie("token" , token ,{
            httpOnly : true,
            maxAge: age,
        } ).status(200).json({message:userInfo})

    }catch (err){
        console.log(err)
        res.status(500).json({message:"Login Failed"})
    }
    //user exist

}
export const logout = (req,res) =>{
    res.clearCookie("token").status(200).json({message:"Logout Sucessful"})

}
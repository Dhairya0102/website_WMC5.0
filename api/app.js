import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.routes.js"
import authRoutes from "./routes/auth.routes.js"
import testRoutes from "./routes/test.route.js"

const app =  express();

app.use(cors({origin: process.env.CLIENT_URL , credentials: true}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/post" , postRoutes);

app.use("/api/auth" , authRoutes);
app.use("/api/test" , testRoutes);

// app.use("/api/test" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/auth/register" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/auth/login" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/auth/logout" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/post/" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/post/" , (req,res)=>{
//     res.send("It works")
// });
// app.use("/api/post/12312" , (req,res)=>{
//     res.send("It works")
// });

app.listen(5500 , () => {
    console.log("Server is running on port 5500")
});
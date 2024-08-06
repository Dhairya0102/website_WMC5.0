// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import postRoutes from "./routes/post.routes.js"
// import authRoutes from "./routes/auth.routes.js"
// import testRoutes from "./routes/test.route.js"

// const app =  express();

// app.use(cors({origin: process.env.CLIENT_URL , credentials: true}));
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/posts" , postRoutes);
// app.use("/api/auth" , authRoutes);
// app.use("/api/test" , testRoutes);

// // app.use("/api/test" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/auth/register" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/auth/login" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/auth/logout" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/post/" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/post/" , (req,res)=>{
// //     res.send("It works")
// // });
// // app.use("/api/post/12312" , (req,res)=>{
// //     res.send("It works")
// // });

// app.listen(5500 , () => {
//     console.log("Server is running on port 5500")
// });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// app.listen(5500, () => {
//   console.log("Server is running!");
// });
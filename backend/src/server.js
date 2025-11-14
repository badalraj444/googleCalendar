import express from "express";
import "dotenv/config";

// import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();

const PORT = process.env.PORT; //

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const __dirname = path.resolve();

app.use(express.json());
// app.use(cookieParser());

// app.use("/api/users",userRoutes);


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../client","dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../client","dist","index.html"));
    });
}

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
    console.log('all good');
    // connectDB();
});

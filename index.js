const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const connectingdb = require("./config/db")
// const path = require("path")
const app = require("./config/app")
dotenv.config();

connectingdb()
// .then(() => {
//     app.listen(process.env.PORT || 8000,() => {
//         console.log(`app is listining on port: ${process.env.PORT}`);
//     });
// })
// .catch((error) => {
//     console.log(`app is not listining`, error)
// })

.then(()=>{
    app.listen(() => {
        console.log(`app is listining on port: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(`app is not listining`, error)
}
)

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log(`server is running on port: ${PORT}`)
// })
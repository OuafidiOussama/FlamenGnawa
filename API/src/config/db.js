const mongoose = require('mongoose')
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE)
        .then(()=>console.log("Connected!"))
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB
const mongoose = require('mongoose')

//connect

const dbConnect = async ()=>{
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4'
        );
        console.log("Db Connected Succesfully");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

dbConnect();

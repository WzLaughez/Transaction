const mongoose = require('mongoose')

//connect

const dbConnect = async ()=>{
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/project_mern'
        );
        console.log("Db Connected Succesfully");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

dbConnect();

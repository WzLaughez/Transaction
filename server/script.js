const express = require('express')
require('./config/dbConnect');
const app = express();
const usersRoute = require('./routes/users/usersRoutes')
const transactionsRoute = require('./routes/transactions/transactionRoutes')
const accountRoute = require('./routes/accounts/accountRoute')

//Middleware
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/transactions', transactionsRoute)
app.use('/api/v1/account', accountRoute)



//error handle

//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req,res) =>{
    console.log(`Server listen in port ${PORT} `);
})
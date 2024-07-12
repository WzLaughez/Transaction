const express = require('express')
require('./config/dbConnect');
const app = express();
const usersRoute = require('./routes/users/usersRoutes')
const transactionsRoute = require('./routes/transactions/transactionRoutes')
const accountRoute = require('./routes/accounts/accountRoute');
const globalErrHandler = require('./middleware/globalErrHandler');

//Middleware
app.use(express.json())
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/transactions', transactionsRoute)
app.use('/api/v1/account', accountRoute)



//error handle
app.use(globalErrHandler)
//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req,res) =>{
    console.log(`Server listen in port ${PORT} `);
})
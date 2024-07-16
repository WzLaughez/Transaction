const getTokenFromHeader = (req) =>{
    
    const headersObj = req.headers;
    const token = headersObj['authorization'].split(' ')[1];
    if(token !== undefined){
        return token;
    }else{
        return {
            status:'Failed',
            meesage:'There is no token attached to header'
        }
    }
}

module.exports = getTokenFromHeader
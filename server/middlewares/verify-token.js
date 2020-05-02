const jwt=require("jsonwebtoken");
module.exports=function(req,res,next)
{
    //whenever someone makes a request, we can attach it to the header----pass as token with key "authorization" header in postman and check
    let token=req.headers['x-access-token'] || req.headers["authorization"];
    

    
    //if token exists
    if(token)
    {       
        //optional-sometimes the front-end will attach bearer on its head,we need to remove it
        let checkBearer="Bearer ";
        if(token.startsWith(checkBearer))
        {
        token=token.slice(checkBearer.length,token.length);

        }
        //to verify the token----pass token and secret key(shoud be taken from environment variable)
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            //if we pass a non-valid token
            if(err)
            {
                res.json({
                    success:false,
                    message:"Failed authenticate"
                })
            }

            else
            {
                req.decoded=decoded;
                //access in any other api using this middleware by req.decoded._id, decode is simply user object
                next();
            }
        })

    }
    //if token does not exist
    else{
        res.json({
            success:false,
            message:"No token Provided"
        })
    }

}
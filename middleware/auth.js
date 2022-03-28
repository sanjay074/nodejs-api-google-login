module.exports = {
    ensureAuth: (req, res, next)=>{
        if(req.isAuthenticated()){
            console.log("Authenticated");
            return next();
        }else{
            console.log("Not Authenticated");
            res.send("Not Authenticated")
        }
    },

    ensureGuest: (req, res, next) =>{
        if(req.isAuthenticated()){
            console.log("Authenticated");
            res.send("Authenticated")
        }else{
            console.log("Not Authenticated");
            return next();
        }
    },




}
function adminMiddleware(req,res,next){
    if(!req.session.isAdmin){
        return res.redirect("/")
    }else {
       next()
    }
    }
    
    
    module.exports = adminMiddleware
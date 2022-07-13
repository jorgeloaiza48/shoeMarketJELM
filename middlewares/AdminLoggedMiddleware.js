const path = require('path');
const fs = require('fs');


const adminLoggedMiddleware = (req, res, next) => {
    res.locals.isAdmin = req.session.isAdmin;
    next();
};
module.exports = adminLoggedMiddleware;
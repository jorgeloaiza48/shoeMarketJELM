const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');

const adminLoggedMiddleware = (req, res, next) => {
    res.locals.isAdmin = req.session.isAdmin;
    next();
};
module.exports = adminLoggedMiddleware;
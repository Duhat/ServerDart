const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {

    } catch (error) {
        return res.status(401).json({
            message: "token tidak valid atau telah kadaluarsa."
        });
    }
};

module.exports = authMiddleware;
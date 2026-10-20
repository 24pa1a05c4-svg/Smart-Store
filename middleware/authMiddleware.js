const jwt = require("jsonwebtoken");


// =====================================================
// AUTHENTICATION MIDDLEWARE
// =====================================================

const authMiddleware = (req, res, next) => {

    try {

        // Get Authorization header
        const authHeader = req.headers.authorization;


        // Check header
        if (!authHeader) {

            return res.status(401).json({

                success: false,

                message: "User not authenticated."

            });

        }


        // Check Bearer format
        if (!authHeader.startsWith("Bearer ")) {

            return res.status(401).json({

                success: false,

                message: "Invalid authorization format."

            });

        }


        // Extract token
        const token = authHeader.split(" ")[1];


        if (!token) {

            return res.status(401).json({

                success: false,

                message: "Authentication token missing."

            });

        }


        // Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Store user information in request
        req.user = decoded;


        // Continue
        next();

    }

    catch (err) {

        console.log("AUTH MIDDLEWARE ERROR:", err.message);

        return res.status(401).json({

            success: false,

            message: "Invalid or expired token."

        });

    }

};


module.exports = authMiddleware;
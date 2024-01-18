/*
    Basic Cors Configurations
*/

const corsConfig = { 
    // Set origin to the wished port (usuallys, the front-end port)
    origin: 'http://localhost:3000', 
    credentials: true 
}

module.exports = corsConfig;
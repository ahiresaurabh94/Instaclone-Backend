var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dek7cagdc',//process.env.CLOUD_NAME, 
    api_key: '999669932891847',//process.env.API_KEY, 
    api_secret: 'PWRpkwvFevHueUXqe_wW4A3v6qw'//process.env.API_SCRE
});

module.exports=cloudinary
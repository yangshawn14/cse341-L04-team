// const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Temple API',
        version: '1.0.0'
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = './swagger.json';
// const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
// swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     console.log('Swagger JSON file has been generated successfully');
// });

module.exports = { doc, outputFile };
const http = require('http');
const PORT = 3000;
const MESSAGE = process.env.MESSAGE || 'World';

const requestHandler = (request, response) => {
    const DATE = new Date();
    console.log(`Incoming request at ${DATE}`);
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    const data = {
        message: `Hello ${MESSAGE}`,
        date: DATE
    };
    response.end(JSON.stringify(data));
};

const server = http.createServer(requestHandler);
server.listen(PORT, (err) => {
    console.log(`Server started on port ${PORT} successfully.`)
});

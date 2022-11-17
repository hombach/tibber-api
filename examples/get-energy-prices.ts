// Uncomment the following line to include tibber-api NPM package instead.
// const TibberQuery = require("tibber-api").TibberQuery;

import { TibberQuery, IConfig } from '../src/index';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

// Config object needed when instantiating TibberQuery
const config: IConfig = {
    active: true,
    apiEndpoint: {
        apiKey: '5K4MVS-OjfWhK_4yrjOlFe1F6kJXPVf7eQYggo8ebAE', // Demo token
        queryUrl: 'https://api.tibber.com/v1-beta/gql',
    },
};

// Instance of TibberQuery
const tibberQuery = new TibberQuery(config);

// Simple web server.
const server = http.createServer(async (req, res) => {
    // Call the Tibber API and return the result.
    // const result = await tibberQuery.getTodaysEnergyPrices('96a14971-525a-4420-aae9-e5aedaa129ff');
    // const result = await tibberQuery.getTomorrowsEnergyPrices('96a14971-525a-4420-aae9-e5aedaa129ff');
    // const result = await tibberQuery.getCurrentEnergyPrices();
    const result = await tibberQuery.getCurrentEnergyPrice('96a14971-525a-4420-aae9-e5aedaa129ff');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
});

// Start web server.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

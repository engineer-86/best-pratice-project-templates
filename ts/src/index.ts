import { expressPort, checkEnviromentVariables } from './app/constants';
import express, { Request, Response, Express } from 'express';

export const app = express();

// for the database credentials and other sensitive information
// the variables are stored in the .env file
checkEnviromentVariables();

app.get('/status', (req: Request, res: Response) => {
    const status = {
        server: 'online',
        message: 'Server is running.',
        timestamp: new Date().toISOString(),
    };

    res.json(status);
});

app.listen(expressPort, () => {
    console.log(`Server started at http://localhost:${expressPort}/status`);
});

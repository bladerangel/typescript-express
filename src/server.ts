/**
 * Created by Rangel on 09/06/2017.
 */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import TestRouter from './routes';

class Server {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void {
        this.express.use('/api/', TestRouter);
    }
}

export default new Server().express;




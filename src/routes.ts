/**
 * Created by Rangel on 09/06/2017.
 */
import {Router} from 'express';
import TestController from './controllers/TestController';

class TestRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/', TestController.getHello);
    }
}

export default new TestRouter().router;
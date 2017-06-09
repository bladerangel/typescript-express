/**
 * Created by Rangel on 09/06/2017.
 */
import {Router, Request, Response, NextFunction} from 'express';

class TestController{

    public getHello(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({message: "Hello Word"});
    }
}

export default new TestController();
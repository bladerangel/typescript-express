/**
 * Created by Rangel on 09/06/2017.
 */
import * as http from 'http';
import Server from './server';

class App {
    private port: string;
    private server: http.Server;

    constructor() {
        Server.set('port', process.env.PORT || 3000);
        this.server = http.createServer(Server);
        this.server.listen(Server.get("port"));
    }

    public static bootstrap(): App {
        return new App();
    }

}

App.bootstrap();

import InfobipConfig from "./config";
import {SMS} from "./sms";

export class Infobip{

    private config : InfobipConfig;

    constructor(private usernameOrObject: string, password?: string){
        if(typeof usernameOrObject == "object")
            this.config = new InfobipConfig(usernameOrObject);

        else if(typeof usernameOrObject == "string" && typeof password == "string")
            this.config = new InfobipConfig({username: usernameOrObject, password: password});
        else
            throw("Please provide a valid infobip configuration")

    }

    public get SMS():SMS{
        return new SMS(this.config);
    }


}
import * as request from "request";
import InfobipConfig from "./config";

export default class Transport{

    constructor(private config: InfobipConfig){}
    

    public send(options,callback?: Function){
       
        let headers = options.headers || {};
        let method = options.method || "post";

        let path = options.path;
        let url =  this.config.baseUrl + path;
        let body = options.body;

        // Default headers
        headers["Authorization"] = this.config.getAuthorization();
        headers["Content-Type"] =  "application/json";
        headers["Accept"]= "application/json";
        
        
        let reqOptions = {
            url: url,
            json: true,
            body: body,
            headers: headers
        };

        request[method](reqOptions,(err, response, body) => {
            this.handleResponse(err,response,body,callback);
        });
        
    }


    private handleResponse(err,res,resBody,callback){
        if(typeof callback !== "function"){
            return;
        }

        let body = resBody ? resBody : null;
        callback(err,res,body);
    }

}
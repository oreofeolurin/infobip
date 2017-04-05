
export default class InfobipConfig{
    public scheme : string;
    public host : string;
    public port : string;
    public username : string;
    public password : string;
    public authType : string;
    public apiKey : string;

    constructor(options){
        this.scheme = options.scheme || (!options.encrypted ? "http" : "https");
        this.port = options.port;

        this.authType = options.authType || 'basic';
        this.apiKey = options.apiKey;

        this.username = options.username;
        this.password = options.password;
        this.host = "api.infobip.com";
    }

    public get baseUrl(){
        return this.scheme + '://' + this.host;
    }


    public getAuthorization(){
        if(this.authType == 'basic')
            return `Basic ${this.generateBasicAuth()}`;

        else if(typeof this.apiKey !== "undefined")
            return `App ${this.apiKey}`;
        else
            throw ('Please provide an API Key');
    }

    private generateBasicAuth(){
        let buffer = new Buffer(this.username+":"+this.password);
        return buffer.toString('base64');
    }


}
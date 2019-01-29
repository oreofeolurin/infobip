import Transport from "./transport";
import InfobipConfig from "./config";

export interface SMSOptions{
    from: string,
    to: string | Array<string>,
    text: string
}

export class SMS{

    private transport: Transport;

    constructor(private config: InfobipConfig){
        this.transport =  new Transport(config);
    }

    /**
     * Send HTTP POST Request to Infobip
     * to send a sms
     *
     * @param options
     */
    public send(options: SMSOptions) {

        return new Promise((resolve, reject)=> {

            //path for this request
            let path = Array.isArray(options.to) ? '/sms/2/text/single' : '/sms/1/text/single';

            let body = {
                "to": options.to,
                "from": options.from,
                "text": options.text,
            };

            this.transport.send({"path": path, "body": body}, function (err, res, resBody) {
                if (err)
                    return reject(err);

                if(res.statusCode == 200)
                    return resolve(resBody);
                else
                    return reject(resBody);

            });
        })
    }

}
console.log('helloworld');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    
    if (body) {
        if(!body.apiKey){
            return {
                statusCode: 403,
                body: JSON.stringify({ message: "Unauthorised! Missing api key.", event }),
            };
        }
        
        if (body.apiKey !== process.env.secret){
            return {
                statusCode: 403,
                body: JSON.stringify({ message: "Unauthorised! Incorrect api key.", event }),
            };   
        }
        
        if (!body.sensor) {
             return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing sensor data.", event }),
            };   
        }
    }
    
    
    const { sensor } = body;
    
    const payload = {
        message: "Welcome Agent Smith.",
        sensor,
        
    };
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({ payload, event }),
    };
    return response;
};

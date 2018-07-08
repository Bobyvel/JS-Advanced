function requestValidator(objRequest) {
    let methodType = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uri = /^[\w.]+$/;
    let versionType = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let message = /^[^<>\\&'"]*$/;


    if (!methodType.includes(objRequest.method)) throwError("Method");
    if (!objRequest.uri || !uri.test(objRequest.uri)) throwError("URI");
    if (!versionType.includes(objRequest.version)) throwError("Version");
    if (!objRequest.hasOwnProperty("message") || !message.test(objRequest.message)) throwError("Message");

    return objRequest;

    function throwError(invalidHeader) {
        throw new Error(`Invalid request header: Invalid ${invalidHeader}`);
    }

}

console.log(requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
));
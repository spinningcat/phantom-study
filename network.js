var page = require("webpage").create();
page.onResourceRequested = function(request){
     console.log("Request " + JSON.stringify(request, undefined, 4));
}
page.onResponseReceieved = function(response){
     console.log("Recieve " + JSON.stringify(response, undefined, 4));
}
page.open("http://www.google.com");
phantom.exit();

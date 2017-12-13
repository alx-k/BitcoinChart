
var pushlametric = require("pushlametric");
var config = require("./config")

var accessToken = config.accessToken;
var widgetID = config.widgetID;

var frames = {
    "frames": [
        {
            "index": 0,
            "chartData": [ 3,9,2,0,4,5,3,7,1,5,4,8,5,2,8,6,9,1,4]
        }
    ]
};


pushlametric.pushFrames(frames, accessToken, widgetID, function(httpstate) {
      if (httpstate == 200) {
        console.log("message send");
      } else {
        console.log("error");
      }
});

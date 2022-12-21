var sub=document.querySelector("#subm")
sub.addEventListener("click",add)


function add(){
 
    var user = document.querySelector("#text1").value
    var password = document.querySelector("#text2").value
    var payload = {
        "username": user,
        "password1": password  
};
console.log(payload);

var topic = "/MIPPCMEXKG/device/2234/msgs/linuxpc/20.60/2003"
var clientId = "DEV_2234";
var client
var message = new Paho.MQTT.Message(JSON.stringify(payload));
message.destinationName = topic;
message.qos = 2;

client = new Paho.MQTT.Client("192.168.0.121",Number(8083),"/mqtt",clientId);

// Called when the connection is made
function onConnect() {
    console.log("Connected!");
    client.send(message);
    console.log(message,"mesa");
    
}

client.connect({
    onSuccess: onConnect,
    userName: "DEV_MIPPCMEXKG",
    password: "dcXxnjeNZwX9"
});

}



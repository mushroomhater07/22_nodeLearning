const net = require('net');
const port = 8888;
const host = 'localhost';

//Create the socket client.
const client1 = new net.Socket();

//Connect to the server on the configured port 
client1.connect(port,host,function(){
	//Log when the connection is established
   console.log(`Cleint 1 :Connected to server on port ${port}`);
   
   //Try to send data to the server 
   client1.write('Hi from the client 1');

});
//Handle data coming from the server
client1.on('data',function(data){
   console.log(`Client 1 received from server : ${data}`);    
});
// Handle connection close 
client1.on('close',function(){
   console.log('Cleint 1 :Connection Closed');
});
//Handle error
client1.on('error',function(error){
   console.error(`Connection Error ${error}`); 
});
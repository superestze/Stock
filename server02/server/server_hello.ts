import * as http from 'http'

const server = http.createServer((
	requires,
	response
	)=>{
    response.end("hello world");
});

server.listen(8000);

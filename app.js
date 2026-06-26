const http = require('http')

function requestListener(req, res){
  console.log(req.body);
}

const server = http.createServer(requestListener);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
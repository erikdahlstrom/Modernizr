var connect = require('connect'),
	args = process.argv.slice(2),
	folder = args[0] || '',
	port = args[1] || '1337';	

var server = connect.createServer(
    connect.logger()
  , connect.static(__dirname + "/"+folder)
).listen(port);

console.log("Server started on port %s in %s", port, "/"+folder);
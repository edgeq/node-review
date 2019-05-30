/**
 * THIS IS AN OVERLY COMPLEX SCRIPT MEANT TO SHOWCASE WHY EXPRESS IS GREAT BY NOT USING EXPRESS
 */
const http = require('http');
const url = require('url');
const port = 3000;

function handler(req, res) {
  const parsedUrl = url.parse(req.url, true);

  //set header with a date
  res.setHeader('x-server-date', new Date());

  if(parsedUrl.pathname  === '/') {
    // home route
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Hello, I am a web server');
    return res.end();
  } else if(parsedUrl.pathname === '/time') {
    // route for time
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(new Date().toLocaleString("en-US", {}));
    return res.end();
  } else if(parsedUrl.pathname === '/hello') {
    //route for parsing a query - note that .query returns an object
    // what gets typed in defines the urlObject.query
    //see https://nodejs.org/api/url.html#url_urlobject_search for more
    const name = parsedUrl.query.name;

    if(!name) {
      // if there is no name query, return a 404 error
      res.writeHead(404, {'Content-type': 'text/plain'});
      return res.end();
    }
    // pass in the name query into the response
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(`Hello ${name}`);
    return res.end();
  } else if(parsedUrl.pathname.startsWith('/user/')) {
    const regex = new RegExp('\/user\/(.+)');
    const matches = regex.exec(parsedUrl.pathname);

    if(!matches || !matches[1]) {
      // if there is no user provided, return a 404 error
      res.writeHead(404, {'Content-type': 'text/plain'});
      return res.end();
    }

    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(`User profile for ${matches[1]}`);
    return res.end();

  } else {
    // for all undefined paths, return a 404 error
    res.writeHead(404, {'Content-type': 'text/plain'});
    return res.end();
  }

}

const server = http.createServer(handler);

server.listen(port, () => {
  console.log(`Server Listening on http://localhost:${port}`);
});



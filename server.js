const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./index.html', { encoding: 'utf8' });
const organizations = fs.readFileSync('./organizations.js', { encoding: 'utf8' });
const script = fs.readFileSync('./script.js', { encoding: 'utf8' });
const styles = fs.readFileSync('./styles.css', { encoding: 'utf8' });
const chooseOrganizations = fs.readFileSync('./choose-organizations.html', { encoding: 'utf8' });

const requestListener = function (request, response) {
    console.log(`${request.method} - ${request.url}`);

    if (request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk;
        });
        request.on('end', () => {
            console.log('POSTed data: ', body);
            const splits = body.split("&");
            const organizations = splits.map(org => {
                return org.replace("=on", "").replaceAll("+", " ");
            })
            console.log(organizations);
            response.writeHead(200);
            response.end(chooseOrganizations.replace("{{organizations}}",organizations));
        });
        return;
    }



    // requst.method === GET
    switch (request.url) {
        case '/':
            response.setHeader('Content-Type', 'text/html');
            response.writeHead(200);
            response.end(index);
            break;
        case '/organizations.js':
            response.setHeader('Content-Type', 'text/js');
            response.writeHead(200);
            response.end(organizations);
            break;
        case '/script.js':
            response.setHeader('Content-Type', 'text/js');
            response.writeHead(200);
            response.end(script);
            break;
        case '/styles.css':
            response.setHeader('Content-Type', 'text/css');
            response.writeHead(200);
            response.end(styles);
            break;
        case '/choose-organizations':
            response.setHeader('Content-Type', 'text/html');
            response.writeHead(200);
            response.end(chooseOrganizations);
            break;
        case '/server.js':
            response.setHeader('Content-Type', 'text/js');
            response.writeHead(200);
            response.end(server);
            break;
        default:
            response.writeHead(404);
            response.end('<html><h1>Not Found!</h1></html>');
    }
}


const server = http.createServer(requestListener);
server.listen(8080);
console.log(`Server started!
Visit http://localhost:8080 in your browser.
`)


//send choose organizations file the same as other files

// use this article for reading form data (the organizations that were picked): https://nodejs.org/en/knowledge/HTTP/servers/how-to-read-POST-data/

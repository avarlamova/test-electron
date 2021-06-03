const { app, BrowserWindow, net } = require('electron')

app.whenReady().then(() => {
    makeRequest();
    createWindow()
  })

  app.on('window-all-closed', () => {app.quit()})
//http://localhost:8888/
//jsonplaceholder.typicode.com/todos/1

  function makeRequest () {
    const request = net.request({
        method: 'GET',
        protocol: 'https:',
        hostname: 'jsonplaceholder.typicode.com/todos/1',
      });
      request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`);
  
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        });
    });
    request.on('finish', () => {
        console.log('Request finished')
    });
    request.on('abort', () => {
        console.log('Request is aborted')
    });
    request.on('error', (error) => {
        console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.on('close', () => {
        console.log('Request closed')
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
    }
  
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }
  
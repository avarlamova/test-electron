const electron = require('electron')
let {PythonShell} = require('python-shell')

const { app, BrowserWindow } = electron
let server = null;

app.whenReady().then(() => {
    makeServer();
    createWindow()
  })

app.on('window-all-closed', () => {app.quit()})

function makeServer() {
  server = PythonShell.run('main.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
});
}

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.on('will-quit', () => {
    server.kill()
})

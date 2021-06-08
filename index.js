const electron = require('electron')

const { app, BrowserWindow, net } = electron

app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {app.quit()})

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }


// importing modules with CommmonJS module syntax
  // app: control your application's event lifecycle
  // BrowserWindow: create and manage app windows
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// load your web page into a new BrowserWindow instance
  // attach the preload.js script to the renderer process by passing its path to the webPreferences.preload option in the BrowserWindow constructor
  // so the renderer has access to the versions global
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('index.html')
}

// run function when app is ready (Mac)
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// quit app whne all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}) 
// importing modules with CommmonJS module syntax
  // app: control your application's event lifecycle
  // BrowserWindow: create and manage app windows
const { app, BrowserWindow } = require('electron');

// load your web page into a new BrowserWindow instance
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

// run function when app is ready (Mac)
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// quit app whne all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit;
}) 
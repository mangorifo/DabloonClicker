const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1260,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: `${__dirname}/view/favicon.ico`
  })
  win.loadFile('view/index.html');
  win.removeMenu();
  console.log(`Window loaded at ${__dirname}`);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

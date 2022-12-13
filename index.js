const { app, BrowserWindow, Menu } = require('electron')
const path = require('path') 
  const menuTemplate = [
      {
        label: 'Game',
        click(menuItem, browserWindow, event) {
          browserWindow.loadURL(`file://${__dirname}/view/index.html`)
      }
      },
      {
        label: 'Credits',
        click(menuItem, browserWindow, event) {
          browserWindow.loadURL(`file://${__dirname}/view/cred.html`)
      }
      },
      {
        label: 'Exit',
        click: app.quit,
      }
];
app.on('ready', () => {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});

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
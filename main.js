const { app, BrowserWindow } = require('electron')

// to bring web page to desktop
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    })
  
    win.loadFile('index.html')
  }


  app.whenReady().then(() => {
    createWindow();
  

    // for macos
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });


  // mac os , apps are always running
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
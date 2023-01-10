const { app, BrowserWindow, Notification } = require('electron')

// to bring web page to desktop
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show:false
    })

    win.loadFile('index.html');
    win.center();

    var splash = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true, 
        frame: false, 
        alwaysOnTop: true 
    });
    
    
    splash.loadFile('splash.html');
    splash.center();
    
    
    setTimeout(function () {
        splash.close();
        win.show();
      }, 5000);
}

const NOTIFICATION_TITLE = 'Notification'
const NOTIFICATION_BODY = 'The app is now running !'
const CLICK_MESSAGE = 'Notification clicked!'

function showNotification() {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}



app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { format } from 'url';

let win: BrowserWindow = null;

const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

function createWindow() {
  // const electronScreen = screen;
  // const size = electronScreen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({ width: 800, height: 600 });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      format({
        pathname: join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

try {
  app.on('ready', createWindow);

  // on macOS, closing the window doesn't quit the app
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // initialize the app's main window
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  console.error(e);
  throw e;
}

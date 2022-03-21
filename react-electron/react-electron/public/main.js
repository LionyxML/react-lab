const { app, BrowserWindow } = require("electron");

require("@electron/remote/main").initialize(); // IPC (Interprocess Communication)

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true, // IPC (Interprocess Communication) in browser
    },
  });

  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

// For MacOS
app.on("windo-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

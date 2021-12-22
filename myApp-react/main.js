const {app, BrowserWindow} = require('electron')
const path = require('path');
const isDev = require('electron-is-dev');//当前是否是开发状态
const url = require('url')
const pkg = require('./package.json');


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
            nodeIntegration: true,
            enableRemoteModule: true,   // 这行代码必须加进去，不然渲染进程无法访问 nodejs，electron 的资源
        }
    });

    //开发调试
    if (isDev) {
        // 加载应用----适用于 react 项目和开发阶段npm run electron
        mainWindow.loadURL('http://localhost:3000/');
        //打开调试工具
        mainWindow.webContents.openDevTools();
        console.log(path.join(__dirname, './build/index.html'))

    } else {
        // 加载应用----react 打包
        /*
          * 加载应用-----  electron-quick-start中默认的加载入口
            mainWindow.loadURL(url.format({
              pathname: path.join(__dirname, './build/index.html'),
              protocol: 'file:',
              slashes: true
            }))
        */
        // mainWindow.loadURL(path.join(__dirname, './build/index.html'))
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        }))
    }
    ;


    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

import { Browser } from "./02-inheritanceBrowser"

class Chrome extends Browser{

    openIncognito(){
        console.log(`Brower: ${this.browserName} opened in Incognito mode`)
    }

    clearCache(){
        console.log("Cache cleared")
    }
}

class Edge extends Browser{

    takeSnap(){
        console.log("Scrrenshot taken")
    }

    clearCookies(){
         console.log(`Cookies cleared in version: ${this.browserVersion}`)
    }
}

class Safari extends Browser{

    readerMode(){
        console.log(`Reade Mode activated in Browser: ${this.browserName}`)
    }

    fullScreenMode(){
        console.log(`Full Screen Mode activated in version: ${this.browserVersion}`)
    }
}

const objBrowser = new Browser("Chrome","1.2.3.4")
objBrowser.openURL();
objBrowser.closeBrowser();
objBrowser.navigateBack();

const objChromeBrowser = new Chrome("Chrome","5.6.7.8")
objChromeBrowser.openURL();
objChromeBrowser.openIncognito();

const objEdgeBrowser = new Edge("Edge","3.2.1.0")
objEdgeBrowser.openURL();
objEdgeBrowser.clearCookies();

const objSafariBrowser = new Safari("Safari","8.7.6.5")
objSafariBrowser.openURL();
objSafariBrowser.fullScreenMode();
objSafariBrowser.readerMode();

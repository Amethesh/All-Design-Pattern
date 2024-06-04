// Refined Abstraction
var MP4Video = /** @class */ (function () {
    function MP4Video(browser) {
        this.browser = browser;
    }
    MP4Video.prototype.play = function () {
        this.browser.launch();
        console.log("Playing MP4 video");
    };
    MP4Video.prototype.pause = function () {
        console.log("Pausing MP4 video");
    };
    MP4Video.prototype.stop = function () {
        console.log("Stopping MP4 video");
    };
    return MP4Video;
}());
// Refined Abstraction
var AVIVideo = /** @class */ (function () {
    function AVIVideo(browser) {
        this.browser = browser;
    }
    AVIVideo.prototype.play = function () {
        this.browser.launch();
        console.log("Playing AVI video");
    };
    AVIVideo.prototype.pause = function () {
        console.log("Pausing AVI video");
    };
    AVIVideo.prototype.stop = function () {
        console.log("Stopping AVI video");
    };
    return AVIVideo;
}());
// Concrete Implementor
var Firefox = /** @class */ (function () {
    function Firefox() {
    }
    Firefox.prototype.launch = function () {
        console.log("Launching Firefox browser");
    };
    return Firefox;
}());
// Concrete Implementor
var Chrome = /** @class */ (function () {
    function Chrome() {
    }
    Chrome.prototype.launch = function () {
        console.log("Launching Chrome browser");
    };
    return Chrome;
}());
// Usage
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter "firefox" or "chrome" for browser: ', function (answer) {
    var browser;
    var video;
    if (answer.toLowerCase() === 'firefox') {
        browser = new Firefox();
        video = new AVIVideo(browser);
    }
    else if (answer.toLowerCase() === 'chrome') {
        browser = new Chrome();
        video = new MP4Video(browser);
    }
    else {
        console.log('Invalid input. Using Firefox browser and AVI video by default.');
        browser = new Firefox();
        video = new AVIVideo(browser);
    }
    video.play();
    video.pause();
    video.stop();
    rl.close();
});

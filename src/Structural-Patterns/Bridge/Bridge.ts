// Abstraction
interface Video {
    play(): void;
    pause(): void;
    stop(): void;
  }
  
  // Implementor
  interface Browser {
    launch(): void;
  }
  
  // Refined Abstraction
  class MP4Video implements Video {
    constructor(private browser: Browser) {}
  
    play(): void {
      this.browser.launch();
      console.log("Playing MP4 video");
    }
  
    pause(): void {
      console.log("Pausing MP4 video");
    }
  
    stop(): void {
      console.log("Stopping MP4 video");
    }
  }
  
  // Refined Abstraction
  class AVIVideo implements Video {
    constructor(private browser: Browser) {}
  
    play(): void {
      this.browser.launch();
      console.log("Playing AVI video");
    }
  
    pause(): void {
      console.log("Pausing AVI video");
    }
  
    stop(): void {
      console.log("Stopping AVI video");
    }
  }
  
  // Concrete Implementor
  class Firefox implements Browser {
    launch(): void {
      console.log("Launching Firefox browser");
    }
  }
  
  // Concrete Implementor
  class Chrome implements Browser {
    launch(): void {
      console.log("Launching Chrome browser");
    }
  }
  
  // Usage
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter "firefox" or "chrome" for browser: ', (answer: string) => {
    let browser: Browser;
    let video: Video;
  
    if (answer.toLowerCase() === 'firefox') {
      browser = new Firefox();
      video = new AVIVideo(browser);
    } else if (answer.toLowerCase() === 'chrome') {
      browser = new Chrome();
      video = new MP4Video(browser);
    } else {
      console.log('Invalid input. Using Firefox browser and AVI video by default.');
      browser = new Firefox();
      video = new AVIVideo(browser);
    }
  
    video.play();
    video.pause();
    video.stop();
  
    rl.close();
  });
  
// // Abstraction
// interface Video {
//     play(): void;
//     pause(): void;
//     stop(): void;
//   }
  
//   // Implementor
//   interface Browser {
//     launch(): void;
//     playVideo(videoFormat: string): void;
//   }
  
//   // Concrete Implementor
//   class Firefox implements Browser {
//     launch(): void {
//       console.log("Launching Firefox browser");
//     }
  
//     playVideo(videoFormat: string): void {
//       console.log(`Playing ${videoFormat} video in Firefox`);
//     }
//   }
  
//   // Concrete Implementor
//   class Chrome implements Browser {
//     launch(): void {
//       console.log("Launching Chrome browser");
//     }
  
//     playVideo(videoFormat: string): void {
//       console.log(`Playing ${videoFormat} video in Chrome`);
//     }
//   }
  
//   // Usage
//   const readline = require('readline');
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('Enter "firefox" or "chrome" for browser: ', (answer) => {
//     let browser: Browser;
//     let videoFormat: string;
  
//     if (answer.toLowerCase() === 'firefox') {
//       browser = new Firefox();
//       videoFormat = 'AVI';
//     } else if (answer.toLowerCase() === 'chrome') {
//       browser = new Chrome();
//       videoFormat = 'MP4';
//     } else {
//       console.log('Invalid input. Using Firefox browser and AVI video by default.');
//       browser = new Firefox();
//       videoFormat = 'AVI';
//     }
  
//     browser.launch();
//     browser.playVideo(videoFormat);
  
//     rl.close();
//   });
  
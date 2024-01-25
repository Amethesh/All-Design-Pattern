import readline from "readline"
import { DarkModeFactory, LightModeFactory, type UIFactory } from "./factory-class";

// function createUI(factory: UIFactory) {
//     const button = factory.CreateButton()
//     const panel = factory.CreateCheckBox();

//     button.click();
//     panel.check();
// }

// // Usage
// const darkFactory = new DarkModeFactory();
// const lightFactory = new LightModeFactory();

// console.log("Creating UI in dark mode:");
// createUI(darkFactory);

// console.log("\nCreating UI in light mode:");
// createUI(lightFactory);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Press Enter your UI dark/light...", (answer) => {
    console.log("Continuing...");
    if(answer === "dark"){
        const darkFactory = new DarkModeFactory();
        
        console.log("Creating UI in dark mode:");
        
        const button = darkFactory.CreateButton();
        const check = darkFactory.CreateCheckBox();
        
        button.click();
        check.check();
    }else {
        const lightFactory = new LightModeFactory();
        
        console.log("\nCreating UI in light mode:");
        
        const button = lightFactory.CreateButton();
        const check = lightFactory.CreateCheckBox();
        
        button.click();
        check.check();
        
    }
    rl.close();
});


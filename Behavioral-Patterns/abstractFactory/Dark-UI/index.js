"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const factory_class_1 = require("./factory-class");
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
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Press Enter your UI dark/light...", (answer) => {
    console.log("Continuing...");
    if (answer === "dark") {
        const darkFactory = new factory_class_1.DarkModeFactory();
        console.log("Creating UI in dark mode:");
        const button = darkFactory.CreateButton();
        const check = darkFactory.CreateCheckBox();
        button.click();
        check.check();
    }
    else {
        const lightFactory = new factory_class_1.LightModeFactory();
        console.log("\nCreating UI in light mode:");
        const button = lightFactory.CreateButton();
        const check = lightFactory.CreateCheckBox();
        button.click();
        check.check();
    }
    rl.close();
});

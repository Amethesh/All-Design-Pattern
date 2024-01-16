"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUI = exports.LightModeFactory = exports.DarkModeFactory = void 0;
//Dark and Light UI elements
class DarkButton {
    click() {
        console.log("Clicked a dark button!");
    }
}
class DarkCheckBox {
    check() {
        console.log("Checked a dark CheckBox.");
    }
}
class LightButton {
    click() {
        console.log("Clicked a light button!");
    }
}
class LightCheckBox {
    check() {
        console.log("Checked a light CheckBox.");
    }
}
// Dark and Light UI factory
class DarkModeFactory {
    CreateButton() {
        return new DarkButton();
    }
    CreateCheckBox() {
        return new DarkCheckBox();
    }
}
exports.DarkModeFactory = DarkModeFactory;
class LightModeFactory {
    CreateButton() {
        return new LightButton();
    }
    CreateCheckBox() {
        return new LightCheckBox();
    }
}
exports.LightModeFactory = LightModeFactory;
class createUI {
    static createUI(style) {
        if (style === "DARK") {
            return new DarkModeFactory();
        }
        else {
            return new LightModeFactory();
        }
    }
}
exports.createUI = createUI;
createUI.createUI("DARK");

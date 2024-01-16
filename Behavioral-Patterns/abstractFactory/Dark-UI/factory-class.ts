interface Button {
    click():void
}
interface CheckBox {
    check():void
}

export interface UIFactory {
    CreateButton(): Button
    CreateCheckBox(): CheckBox
}

//Dark and Light UI elements
class DarkButton implements Button {
    click(): void {
        console.log("Clicked a dark button!");
    }
}

class DarkCheckBox implements CheckBox {
    check(): void {
        console.log("Checked a dark CheckBox.");
    }
}

class LightButton implements Button {
    click(): void {
        console.log("Clicked a light button!");
    }
}

class LightCheckBox implements CheckBox {
    check(): void {
        console.log("Checked a light CheckBox.");
    }
}


// Dark and Light UI factory
export class DarkModeFactory implements UIFactory {
    CreateButton(): Button {
        return new DarkButton();
    }

    CreateCheckBox(): CheckBox {
        return new DarkCheckBox();
    }
}

export class LightModeFactory implements UIFactory {
    CreateButton(): Button {
        return new LightButton();
    }

    CreateCheckBox(): CheckBox {
        return new LightCheckBox();
    }
}

export class createUI {
    public static createUI(style: string):UIFactory{
        if(style === "DARK"){
            return new DarkModeFactory()
        }
        else{
            return new LightModeFactory()
        }
    }
}

createUI.createUI("DARK")

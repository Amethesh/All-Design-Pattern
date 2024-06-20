import { Composite } from "./composite"
import { Leaf } from "./leaf"

// Client Code
const manager1 = new Composite('manager1')
const manager2 = new Composite('manager2')

const junior1 = new Leaf('junior1')
const junior2 = new Leaf('junior2')

manager1.add(junior1)
manager1.display()

manager2.add(manager1)
manager2.display()

junior1.display()
junior2.display()

junior1.add(junior2) // !Cannot add junior1 to leaf junior2.
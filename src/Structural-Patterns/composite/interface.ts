import { Composite } from "./composite"

export interface Component {
  name: string
  parent?: Composite
  display(): void
  detach(): void
  add(component: Component): void
  delete(component: Component): void
}
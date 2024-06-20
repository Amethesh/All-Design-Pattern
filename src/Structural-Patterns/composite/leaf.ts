import { Composite } from "./composite"
import { Component } from "./interface"

export class Leaf implements Component {
  name: string
  parent?: Composite

  constructor(name: string) {
    this.name = name
  }

  display(): void {
    const leaf = `Leaf Name:${this.name}`
    const parent = `Parent Name:${this.parent?.name ?? '(none)'}`

    console.log(`${leaf} ${parent}`)
  }

  detach(): void {
    if (!this.parent) return
    this.parent.delete(this)
  }

  add(component: Component): void {
    throw new Error(`Cannot add ${component.name} to leaf ${this.name}.`)
  }

  delete(component: Component): void {
    throw new Error(`Cannot delete ${component.name} to leaf ${this.name}.`)
  }
}
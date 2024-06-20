import { Component } from "./interface"

export class Composite implements Component {
  name: string
  children: Component[]
  parent?: Composite

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  display(): void {
    const composite = `Composite Name:${this.name}`
    const parent = `Parent Name:${this.parent?.name ?? '(none)'}`
    const children = `Children Count:${this.children.length}`

    console.log(`${composite} ${parent} ${children}`)
    this.children.forEach((c) => c.display()) // recursive
  }

  add(component: Component): void {
    component.detach() // ✅
    component.parent = this
    this.children.push(component)
  }

  delete(component: Component): void {
    const index = this.children.indexOf(component)

    if (index === -1) return
    this.children.splice(index, 1)
  }

  detach(): void {
    if (!this.parent) return
    this.parent.delete(this)
    this.parent = undefined
  }
}
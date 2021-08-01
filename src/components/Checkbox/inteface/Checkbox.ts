import ICheckbox from "@/components/Checkbox/inteface/ICheckbox"

export default class Checkbox implements ICheckbox {
  constructor(id: string, name: string, checked: boolean) {
    this.id = id
    this.name = name
    this.checked = checked
  }

  toggle(): boolean {
    this.checked = !this.checked
    return this.checked
  }

  check(): boolean {
    this.checked = true
    return this.checked
  }

  uncheck(): boolean {
    this.checked = false
    return this.checked
  }

  id: string
  name: string
  checked: boolean
}

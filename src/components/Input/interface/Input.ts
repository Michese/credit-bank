import IInput from "@/components/Input/interface/IInput"
export default class Input implements IInput {
  constructor(
    type: string,
    name: string,
    placeholder: string,
    pattern: RegExp
  ) {
    this.type = type
    this.name = name
    this.placeholder = placeholder
    this.pattern = pattern
    this.value = ""
  }

  isValid(): boolean {
    return this.pattern.test(this.value)
  }

  type: string
  name: string
  placeholder: string
  pattern: RegExp
  value: string
}

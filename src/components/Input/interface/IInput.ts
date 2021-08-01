export default interface IInput {
  type: string
  name: string
  placeholder: string
  pattern: RegExp
  value: string
  isValid(): boolean
}

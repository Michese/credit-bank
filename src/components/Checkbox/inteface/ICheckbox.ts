export default interface ICheckbox {
  id: string
  name: string
  checked: boolean
  
  toggle(): boolean
  check(): boolean
  uncheck(): boolean
}

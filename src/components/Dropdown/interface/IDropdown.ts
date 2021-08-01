import IOption from "@/components/Dropdown/interface/IOption"

export default interface IDropdown {
  selectedIndex: number
  options: IOption[]
  isOpen: boolean

  getOptions(): IOption[]
  getAllOptions(): IOption[]
  getOption(index: number): IOption
  getSelectedOption(): IOption
  setSelected(index: number): IOption
  toggle(): boolean
}

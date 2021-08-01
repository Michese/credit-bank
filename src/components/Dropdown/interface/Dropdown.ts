import IDropdown from "@/components/Dropdown/interface/IDropdown"
import IOption from "@/components/Dropdown/interface/IOption"

export default class Dropdown implements IDropdown {
  constructor(options: IOption[]) {
    this.options = options.map((option: IOption, index: number) => {
      return option.setIndex(index)
    })

    if (this.options.length === 0) {
      throw new Error("В выпадающем списке нет элементов")
    }

    this.selectedIndex = 0
    this.isOpen = false
  }

  getOptions(): IOption[] {
    return this.options.filter((option: IOption, index: number) => {
      return index !== this.selectedIndex
    })
  }

  getAllOptions(): IOption[] {
    return this.options
  }

  getOption(index: number): IOption {
    return this.options[index]
  }

  getSelectedOption(): IOption {
    return this.options[this.selectedIndex]
  }

  setSelected(index: number): IOption {
    this.selectedIndex = index
    return this.options[this.selectedIndex]
  }

  toggle():boolean {
    this.isOpen = !this.isOpen
    return this.isOpen
  }

  selectedIndex: number
  options: IOption[]
  isOpen: boolean
}
